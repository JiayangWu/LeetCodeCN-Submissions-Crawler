# -*- coding: utf-8 -*-
# /usr/bin/env python3

"""
爬取力扣中国（https://leetcode.cn）的个人AC代码，并提交到github仓库中。
在 config.json 中设置：用户名、密码、代码存储目录、最大爬取天数。
致谢 @fyears 的 login 函数来自 https://gist.github.com/fyears/487fc702ba814f0da367a17a2379e8ba
本代码原仓库地址: https://github.com/JiayangWu/LeetCodeCN-Submissions-Crawler
如爬虫失效，可在仓库中提出issue
"""

import json
import os
import time
import requests
from api.login import login
from api.downloadCode import downloadCode
from api.getProblemSet import getProblemSet

from utils import generatePath, gitPush, wrap_up_scraping

from logger import logger

# 避免验证 https 证书的报错
requests.packages.urllib3.disable_warnings()


def init():
    # 避免验证 https 证书的报错
    requests.packages.urllib3.disable_warnings()
    global MAPPING, USERNAME, PASSWORD, OUTPUT_DIR, OVERWRITE, \
        TIME_CONTROL, START_PAGE, SLEEP_TIME, PAGE_TIME, LIMIT

    CONFIG_PATH = "./config.json"
    MAPPING_PATH = "./mapping.json"

    # 读取用户名，密码，本地存储目录，抓取天数
    with open(CONFIG_PATH, "r") as f:
        config = json.loads(f.read())
        USERNAME = config['username']
        PASSWORD = config['password']
        OUTPUT_DIR = config['output_dir']
        TIME_CONTROL = 3600 * 24 * config['day']
        OVERWRITE = config['overwrite']

    if not os.path.exists(OUTPUT_DIR):
        os.mkdir(OUTPUT_DIR)

    with open(MAPPING_PATH, 'r', encoding='utf-8') as f:
        MAPPING = json.load(f)

    # -----------可选参数-----------
    # 从哪一页submission开始爬起，0 是最新的一页
    START_PAGE = 0
    # 登录失败时的休眠时间/s
    SLEEP_TIME = 5
    # 翻页时间
    PAGE_TIME = 3
    # 一页提交记录数
    LIMIT = 20


def scraping(client):
    page_num = START_PAGE
    visited = set()
    not_found_list = []
    problems_to_be_reprocessed = []

    while True:
        logger.info('Now scraping for page:{page_num}'.format(page_num=page_num))
        submissions_url = "https://leetcode.cn/api/submissions/?offset={page_num}&limit={limit}".format(
            page_num=page_num, 
            limit=LIMIT
        )
        html = client.get(submissions_url, verify=True)
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
            if cur_time - submission['timestamp'] > TIME_CONTROL:
                logger.info("Notice: Finished scraping for the preset time.")
                wrap_up_scraping(
                    not_found_list, problems_to_be_reprocessed, MAPPING)
                return

            if submission_status != "Accepted":
                continue

            try:
                problem_id = MAPPING.get(problem_title, '0')
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
                            problem_id, problem_title, submission_language, OUTPUT_DIR)

                        if not OVERWRITE and os.path.exists(full_path):
                            continue

                        code = downloadCode(submission, client)
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

            except Exception as e:
                logger.error("Unknwon bug happened, please raise an issue with your log to the writer.")
                logger.error(e)

                # 重新登录解决 NoneType 异常
                if e.__str__()[:10] == "'NoneType'":
                    client = login(USERNAME, PASSWORD)
                time.sleep(PAGE_TIME * 2)

        page_num += LIMIT
        time.sleep(PAGE_TIME)


def main(update_problemset=True):
    if update_problemset:
        getProblemSet(logger=logger)

    if not os.path.exists("mapping.json"):
        logger.error("Required mapping.json is missing, so the script is unable to proceed.")
        sys.exit()

    init()

    logger.info('Login')
    client = login(USERNAME, PASSWORD, logger=logger)
    if not client:
        return

    logger.info('Start scrapping')
    scraping(client)
    logger.info('End scrapping \n')

    gitPush(OUTPUT_DIR)
    logger.info('Git push finished')


if __name__ == '__main__':
    main()
