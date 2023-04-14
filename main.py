# -*- coding: utf-8 -*-
# /usr/bin/env python3

"""
爬取力扣中国（https://leetcode.cn）的个人AC代码，并提交到github仓库中。
在 config.json 中设置：用户名、密码、代码存储目录、最大爬取天数。
致谢 @fyears 的 login 函数来自 https://gist.github.com/fyears/487fc702ba814f0da367a17a2379e8ba
本代码原仓库地址: https://github.com/JiayangWu/LeetCodeCN-Submissions-Crawler
爬虫失效，可在仓库中提出issue
"""

import json
import os
import time
import requests
from ProblemList import GetProblemId


# 避免验证 https 证书的报错
requests.packages.urllib3.disable_warnings()


leetcode_url = 'https://leetcode.cn/'
sign_in_url = leetcode_url + 'accounts/login/'
submissions_url = leetcode_url + 'submissions/'
config_path = "./config.json"


# 读取用户名，密码，本地存储目录，抓取天数
with open(config_path, "r") as f:
    config = json.loads(f.read())
    USERNAME = config['username']
    PASSWORD = config['password']
    OUTPUT_DIR = config['outputDir']
    # 抓取的天数
    TIME_CONTROL = 3600 * 24 * config['day']

FILE_FORMAT = {"C++": ".cpp", "Python3": ".py", "Python": ".py", "MySQL": ".sql", "Go": ".go", "Java": ".java",
               "C": ".c", "JavaScript": ".js", "TypeScript": ".ts", "PHP": ".php", "C#": ".cs", "Ruby": ".rb", "Swift": ".swift",
               "Scala": ".scl", "Kotlin": ".kt", "Rust": ".rs"}


# -----------可选参数-----------
START_PAGE = 0  # 从哪一页submission开始爬起，0是最新的一页
SLEEP_TIME = 5  # 登录失败时的休眠时间/s
PAGE_TIME = 3   # 翻页时间
LIMIT = 20      # 一页出现提交记录数
# -----------------------------

# 登录函数，成功返回 访问会话


def login(username, password):
    client = requests.session()
    client.encoding = "utf-8"

    try_cnt = 0
    while True:
        try:
            try_cnt += 1
            client.get(sign_in_url, verify=False)
            login_data = {
                'login': username,
                'password': password
            }

            result = client.post(sign_in_url, data=login_data,
                                 headers=dict(Referer=sign_in_url))

            # result.ok 判断请求是否
            # result.url 判断是否真正登录成功
            if result.ok and result.url == 'https://leetcode.cn/':
                print("Login successfully!")
                break
            raise Exception("Login failed! Wait till next round!")
        except Exception as e:
            # 尝试三次后，结束登录
            print(e)
            if try_cnt >= 3:
                print("Please sure your username and password is correct!!!")
                return None
            # 存在用户密码正确，而登录失败的情况因此多次登录解决(暂未解决)
            time.sleep(SLEEP_TIME)
    return client

# 生成文件路径


def generatePath(problem_id, problem_title, submission_language):
    # 如果题目是传统的数字题号
    if problem_id[0].isdigit():
        problem_id = int(problem_id)
        # 目录名
        newpath = OUTPUT_DIR + "/" + \
            '{:0=4}'.format(problem_id) + "." + problem_title
        # 文件名
        filename = '{:0=4}'.format(problem_id) + "-" + \
            problem_title + FILE_FORMAT[submission_language]
    else:
        # 如果题目是新的面试题
        newpath = OUTPUT_DIR + "/" + problem_id + "." + problem_title
        # 存放的文件名
        filename = problem_id + "-" + problem_title + \
            FILE_FORMAT[submission_language]

    if not os.path.exists(newpath):
        os.mkdir(newpath)

    # 完整路径
    return os.path.join(newpath, filename)

# 代码下载


def downloadCode(submission, client):
    headers = {
        'Connection': 'keep-alive',
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.152 Safari/537.36'
    }
    param = {'operationName': "mySubmissionDetail", "variables": {"id": submission["id"]},
             'query': 'query mySubmissionDetail($id: ID\u0021) {  submissionDetail(submissionId: $id) {    id    code    runtime    memory    statusDisplay    timestamp    lang    passedTestCaseCnt    totalTestCaseCnt    sourceUrl    question {      titleSlug      title      translatedTitle      questionId      __typename    }    ... on GeneralSubmissionNode {      outputDetail {        codeOutput        expectedOutput        input        compileError        runtimeError        lastTestcase        __typename      }      __typename    }    __typename  }}'
             }

    param_json = json.dumps(param).encode("utf-8")
    response = client.post("https://leetcode.cn/graphql/",
                           data=param_json, headers=headers)
    submission_details = response.json()["data"]["submissionDetail"]
    if not submission_details:
        return None
    return submission_details["code"]


def scraping(client):
    page_num = START_PAGE
    visited = set()
    not_found_list = []


    while True:
        print("\n", 'Now for page:{}'.format(page_num), "\n")
        submissions_url = "https://leetcode.cn/api/submissions/?offset={0}&limit={1}".format(page_num, LIMIT)
        html = client.get(submissions_url, verify=True)
        html = json.loads(html.text)

        if not html.get("submissions_dump"):
            print("---------------------interrupting---------------------")
            print("No earlier submissions OR some errors have occurred!!!")
            break

        cur_time = time.time()
        for submission in html["submissions_dump"]:
            submission_status = submission['status_display']
            problem_title = submission['title'].replace(" ", "")
            submission_language = submission['lang']

            # 时间记录
            if cur_time - submission['timestamp'] > TIME_CONTROL:
                print("Finished scraping for the desired time.")
                return

            if submission_status != "Accepted":
                print(problem_title +
                      " was not Accepted, continue for the next submission")
                continue

            try:
                problem_id = GetProblemId(problem_title)
                if problem_id == "0":
                    print(
                        problem_title + " failed! Due to unknown Pid! Please check ProblemList.py to see if this question is included.")
                    not_found_list.append(problem_title)
                else:
                    # 保障每道题只记录每种语言最新的AC解
                    token = problem_id + submission_language
                    if token not in visited:
                        visited.add(token)
                        full_path = generatePath(
                            problem_id, problem_title, submission_language)

                        if (os.path.exists(full_path)):
                            continue

                        code = downloadCode(submission, client)
                        with open(full_path, "w") as f:  # 开始写到本地
                            f.write(code)
                            print("Writing ends! ", full_path)

            except FileNotFoundError as e:
                print("Output directory doesn't exist")

            except Exception as e:
                print(
                    e, " Unknwon bug happened, please raise an issue with your log to the writer.")

                # 重新登录解决 NoneType 异常
                if e.__str__()[:10] == "'NoneType'":
                    client = login(USERNAME, PASSWORD)
                time.sleep(PAGE_TIME*2)

        page_num += LIMIT
        time.sleep(PAGE_TIME)


def gitPush():
    today = time.strftime('%Y-%m-%d', time.localtime(time.time()))
    os.chdir(OUTPUT_DIR)
    instructions = ["git add .", "git status",
                    "git commit -m \"" + today + "\"", "git push -u origin master"]
    for ins in instructions:
        os.system(ins)
        print("~~~~~~~~~~~~~" + ins + " finished! ~~~~~~~~")


def main():
    print('Login')
    client = login(USERNAME, PASSWORD)
    if not client:
        return

    print('Start scrapping')
    scraping(client)
    print('End scrapping')

    # 调试中
    # gitPush()
    # print('Git push finished')


if __name__ == '__main__':
    main()
