import json
import os
import time
import requests
from src.leetcode_client import LeetcodeClient

from src.utils import generatePath, gitPush

from src.logger import logger

TEMP_FILE_PATH = "./temp_problemset.txt"
CONFIG_PATH = "./configuration/config.json"
LIMIT = 40
PAGE_TIME = 3
START_PAGE = 0


class Crawler:
    def __init__(self, args) -> None:
        with open(CONFIG_PATH, "r") as f:
            config = json.loads(f.read())
            self.USERNAME = args.id if args.id else config['username']
            self.PASSWORD = args.password if args.password else config['password']
            self.OUTPUT_DIR = args.output if args.output else config['output_dir']
            self.TIME_CONTROL = 3600 * 24 * \
                (args.day if args.day else config['day'])
            self.OVERWRITE = args.overwrite
        self.c = 0
        self.visited = {}
        self.problems_to_be_reprocessed = []

        if not os.path.exists(self.OUTPUT_DIR):
            os.makedirs(self.OUTPUT_DIR)

        self.lc = LeetcodeClient(
            self.USERNAME,
            self.PASSWORD,
            logger=logger
        )

    def isExpired(self, submission):
        cur_time = time.time()
        return cur_time - submission['timestamp'] > self.TIME_CONTROL

    def process_submissions(self, submissions):
        fail_count = 0
        for submission in submissions:
            if submission['status_display'] != "Accepted":
                continue
            if self.isExpired(submission):
                return True
            try:
                self.process_submission(submission)
            except FileNotFoundError as e:
                logger.error(
                    "FileNotFoundError: Output directory doesn't exist!")
            except TypeError as e:
                if fail_count == 2:
                    logger.warning(
                        "Code continually getting None. It may caused by service banning, wait minutes to continue.")
                    break
                fail_count += 1
                logger.warning("Code is None. Skip. Re-login")
                self.lc.login()
                time.sleep(PAGE_TIME * 2)
            except Exception as e:
                logger.error(
                    "Unknwon bug happened, please raise an issue with your log to the writer.")
                logger.error(type(e))
                logger.error(e)
                import traceback
                traceback.print_exc()
        return False

    def process_submission(self, submission):
        submission_details = self.lc.downloadCode(submission)

        problem_frontendId = submission_details["question"]["questionFrontendId"]
        problem_title = submission_details["question"]["translatedTitle"]
        submission_lang = submission["lang"]
        submission_token = problem_title + submission_lang
        # print(submission_token)
        if submission_token not in self.visited:
            self.visited[submission_token] = problem_frontendId
            full_path = generatePath(
                problem_frontendId, problem_title, submission["lang"], self.OUTPUT_DIR
            )
            if not self.OVERWRITE and os.path.exists(full_path):
                return
            self.save_code(
                submission_details["code"], problem_frontendId, problem_title, submission_lang, full_path)

    def save_code(self, code, problem_frontendId, problem_title, submission_lang, full_path):
        with open(full_path, "w") as f:  # 开始写到本地
            f.write(code)
            logger.info("Writing ends! " + full_path)
            if self.is_temporary_problem(problem_frontendId):
                self.problems_to_be_reprocessed.append(
                    (full_path, problem_title, submission_lang))

    def is_temporary_problem(self, problem_frontendId):
        if problem_frontendId[0].isdigit():
            format_name = '{:0>4}'.format(
                problem_frontendId)
            if format_name[0] >= "6":
                return True
        return False

    def process_temporary_problems(self):
        if os.path.exists(TEMP_FILE_PATH):
            with open(TEMP_FILE_PATH, "r") as f:
                for line in f.readlines():
                    try:
                        path, title, lang = line.rstrip().split(" ", 1)
                    except ValueError:
                        logger.warning("Your " + TEMP_FILE_PATH +
                                       " is in old format, delete all temp code.")
                        _, path = line.rstrip().split(" ", 1)
                        os.remove(path)
                    token = title + lang
                    if token in self.visited:
                        if not self.is_temporary_problem(self.visited[token]):
                            logger.info(
                                path + " is no longer a temporary problem, delete temp code.")
                            os.remove(path)
                        else:
                            self.problems_to_be_reprocessed.append(
                                (path, title, lang))

    def write_temorary_file(self):
        if self.problems_to_be_reprocessed:
            with open(TEMP_FILE_PATH, "w") as f:
                for full_path, problem_title, submission_lang in self.problems_to_be_reprocessed:
                    f.write(full_path + " " + problem_title +
                            " " + submission_lang + "\n")
                    logger.info("Record temporary code: " + full_path)

    def scraping(self):
        page_num = START_PAGE
        while True:
            submission_list = self.lc.getSubmissionList(page_num)
            expired = self.process_submissions(
                submission_list["submissions_dump"])
            if not submission_list.get("has_next") or expired:
                logger.info("No more submissions!")
                break
            page_num += LIMIT
            time.sleep(PAGE_TIME)
        self.process_temporary_problems()
        self.write_temorary_file()

    def execute(self):
        logger.info('Login')
        self.lc.login()
        logger.info('Start scrapping')
        self.scraping()
        logger.info('End scrapping \n')
        gitPush(self.OUTPUT_DIR)


if __name__ == '__main__':
    c = Crawler()
    c.execute()
