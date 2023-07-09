import json
import os
import time
import requests
from src.leetcode_client import LeetcodeClient

from src.utils import generatePath, gitPush, wrap_up_scraping

from src.logger import logger

# 避免验证 https 证书的报错
requests.packages.urllib3.disable_warnings()

class Crawler:
    CONFIG_PATH = "./configuration/config.json"
    MAPPING_PATH = "./configuration/mapping.json"
    def __init__(self) -> None:
        requests.packages.urllib3.disable_warnings()
        with open(self.CONFIG_PATH, "r") as f:
            config = json.loads(f.read())
            self.USERNAME = config['username']
            self.PASSWORD = config['password']
            self.OUTPUT_DIR = config['output_dir']
            self.TIME_CONTROL = 3600 * 24 * config['day']
            self.OVERWRITE = config['overwrite']
            # -----------可选参数-----------
            # 从哪一页submission开始爬起，0 是最新的一页
            self.START_PAGE = 0
            # 登录失败时的休眠时间/s
            self.SLEEP_TIME = 5
            # 翻页时间
            self.PAGE_TIME = 3
            # 一页提交记录数
            self.LIMIT = 20

        if not os.path.exists(self.OUTPUT_DIR):
            os.makedirs(self.OUTPUT_DIR)

        with open(self.MAPPING_PATH, 'r', encoding='utf-8') as f:
            self.MAPPING = json.load(f)

        self.lc = LeetcodeClient(self.USERNAME, self.PASSWORD, self.MAPPING_PATH, logger=logger)


    def scraping(self):
        page_num = self.START_PAGE
        visited = set()
        not_found_list = []
        problems_to_be_reprocessed = []

        while True:
            logger.info('Now scraping for page:{page_num}'.format(page_num=page_num))
            submissions_url = "https://leetcode.cn/api/submissions/?offset={page_num}&limit={limit}".format(
                page_num=page_num, 
                limit=self.LIMIT
            )
            html = self.lc.client.get(submissions_url, verify=True)
            html = json.loads(html.text)

            if not html.get("submissions_dump"):
                logger.warning("Notice: No earlier submissions or some errors have occurred!")
                break

            cur_time = time.time()
            for submission in html["submissions_dump"]:
                submission_status = submission['status_display']
                problem_title = submission['title'].replace(" ", "")
                submission_language = submission['lang']

                # 时间记录
                if cur_time - submission['timestamp'] > self.TIME_CONTROL:
                    logger.info("Notice: Finished scraping for the preset time.")
                    wrap_up_scraping(
                        not_found_list, problems_to_be_reprocessed, self.MAPPING)
                    return

                if submission_status != "Accepted":
                    continue

                try:
                    problem_id = self.MAPPING.get(problem_title, '0')
                    if problem_id == "0":
                        logger.warning(
                            "Notice: {problem_title} failed, due to unkown Pid!".format(problem_title=problem_title)
                        )
                        not_found_list.append(problem_title)
                    else:
                        # 保障每道题只记录每种语言最新的AC解
                        token = problem_id + submission_language
                        if token not in visited:
                            visited.add(token)
                            full_path = generatePath(
                                problem_id, problem_title, submission_language, self.OUTPUT_DIR)

                            if not self.OVERWRITE and os.path.exists(full_path):
                                continue

                            code = self.lc.downloadCode(submission)

                            with open(full_path, "w") as f:  # 开始写到本地
                                f.write(code)
                                logger.info("Writing ends! " + full_path)

                            if problem_id[0].isdigit():
                                filename = '{:0>4}'.format(
                                    problem_id) + "-" + problem_title
                                # 最新题的暂时题号以6开始, 会在一周以内变成永久题号，所以需要多次处理
                                if filename[0] >= "6":
                                    problems_to_be_reprocessed.append(
                                        (filename, full_path))

                except FileNotFoundError as e:
                    logger.error("FileNotFoundError: Output directory doesn't exist!")
                except TypeError as e:
                    logger.warning("Code is None. Skip.")
                except Exception as e:
                    logger.error("Unknwon bug happened, please raise an issue with your log to the writer.")
                    logger.error(type(e))
                    import traceback
                    traceback.print_exc()

                    # 重新登录解决 NoneType 异常
                    if e.__str__()[:10] == "'NoneType'":
                        client = self.lc.login(self.USERNAME, self.PASSWORD)
                    time.sleep(self.PAGE_TIME * 2)

            page_num += self.LIMIT
            time.sleep(self.PAGE_TIME)


    def execute(self):
        self.lc.getProblemSet()

        logger.info('Login')
        self.lc.login()

        logger.info('Start scrapping')
        self.scraping()
        logger.info('End scrapping \n')

        gitPush(self.OUTPUT_DIR)


if __name__ == '__main__':
    c = Crawler()
    c.execute()
