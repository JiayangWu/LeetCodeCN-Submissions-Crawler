# -*- coding: utf-8 -*-
# /usr/bin/env python3
"""
这是一个将力扣中国(leetcode-cn.com)上的【个人提交】的submission自动爬到本地并push到github上的爬虫脚本。
请使用相同目录下的config.json设置 用户名，密码，本地储存目录， 最大爬取天数等参数。
致谢@fyears, 本脚本的login函数来自https://gist.github.com/fyears/487fc702ba814f0da367a17a2379e8ba
原仓库地址:https://github.com/JiayangWu/LeetCodeCN-Submissions-Crawler
如果爬虫失效的情况,请在原仓库提出issue。
"""

import json
import os
import time
import requests

from ProblemList import GetProblemId

# ~~~~~~~~~~~~以下是无需修改的参数~~~~~~~~~~~~~~~~·
# 为了避免弹出一万个warning，which is caused by 非验证的get请求
requests.packages.urllib3.disable_warnings()

leetcode_url = 'https://leetcode.cn/'
sign_in_url = leetcode_url + 'accounts/login/'
submissions_url = leetcode_url + 'submissions/'
config_path = "./config.json"


# 读取用户名，密码，本地存储目录
with open(config_path, "r") as f:
    config = json.loads(f.read())
    USERNAME = config['username']
    PASSWORD = config['password']
    OUTPUT_DIR = config['outputDir']
    TIME_CONTROL = 3600 * 24 * config['time']

FILE_FORMAT = {"C++": ".cpp", "Python3": ".py", "Python": ".py", "MySQL": ".sql", "Go": ".go", "Java": ".java",
               "C": ".c", "JavaScript": ".js", "PHP": ".php", "C#": ".cs", "Ruby": ".rb", "Swift": ".swift",
               "Scala": ".scl", "Kotlin": ".kt", "Rust": ".rs"}
# ~~~~~~~~~~~~以上是无需修改的参数~~~~~~~~~~~~~~~~·

# ~~~~~~~~~~~~以下是可以修改的参数~~~~~~~~~~~~~~~~·
START_PAGE = 0  # 从哪一页submission开始爬起，0是最新的一页
SLEEP_TIME = 5  # in second，登录失败时的休眠时间
PAGE_TIME = 3   # 翻页时间
LIMIT = 20      # 一页出现提交记录数
# ~~~~~~~~~~~~以上是可以修改的参数~~~~~~~~~~~~~~~~·

# 本函数修改自https://gist.github.com/fyears/487fc702ba814f0da367a17a2379e8ba，感谢@fyears


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

            # result.ok 只是返回请求是否成功，并不能判断是否登录成功
            # 通过 result.url 可以判断是否真正登录成功
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
            # 存在用户密码正确，而登录失败的情况因此可以多次登录(暂未解决)
            time.sleep(SLEEP_TIME)
    return client


def scraping(client):
    page_num = START_PAGE
    visited = set()
    not_found_list = []
    while True:
        print("\nNow for page:", str(page_num), '\n')
        submissions_url = "https://leetcode.cn/api/submissions/?offset=" + \
            str(page_num) + "&limit="+str(LIMIT)
        html = client.get(submissions_url, verify=True)
        html = json.loads(html.text)

        if not html.get("submissions_dump"):
            print("interrupting!")
            print("No previous submission is detected, finish the scraping of solution!")
            print("Or some error taking place, please make sure you are logging in the correct account and you once submitted codes on leetcode.cn")
            break

        cur_time = time.time()
        for submission in html["submissions_dump"]:
            submission_status = submission['status_display']
            problem_title = submission['title'].replace(" ", "")
            submission_language = submission['lang']

            # 时间管理，本行代表只记录最近的TIME_CONTROL天内的提交记录
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
                    if problem_id + submission_language not in visited:
                        visited.add(problem_id + submission_language)
                        full_path = generatePath(
                            problem_id, problem_title, submission_language)
                        if(os.path.exists(full_path)):
                            print('File exists!')
                            continue
                        
                        code = downloadCode(submission, client)
                        with open(full_path, "w") as f:  # 开始写到本地
                            f.write(code)
                            print("Writing ends!", full_path)

            except FileNotFoundError as e:
                print("Output directory doesn't exist")

            except Exception as e:
                print(
                    e, " Unknwon bug happened, please raise an issue with your log to the writer.")

                # 解决之后继续出现 NoneType 异常
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
    if not submission_details:return None
    return submission_details["code"]


def generatePath(problem_id, problem_title, submission_language):
    if problem_id[0].isdigit():  # 如果题目是传统的数字题号
        problem_id = int(problem_id)
        newpath = OUTPUT_DIR + "/" + \
            '{:0=4}'.format(problem_id) + "." + problem_title  # 存放的文件夹名
        filename = '{:0=4}'.format(
            problem_id) + "-" + problem_title + FILE_FORMAT[submission_language]  # 存放的文件名
    else:  # 如果题目是新的面试题
        newpath = OUTPUT_DIR + "/" + problem_id + "." + problem_title
        filename = problem_id + "-" + problem_title + \
            FILE_FORMAT[submission_language]  # 存放的文件名

    if not os.path.exists(newpath):
        os.mkdir(newpath)

    full_path = os.path.join(newpath, filename)  # 把文件夹和文件组合成新的地址
    return full_path


def main():
    print('Login')
    client = login(USERNAME, PASSWORD)
    if not client:
        return

    print('Start scrapping')
    scraping(client)
    print('End scrapping')

    gitPush()
    print('Git push finished')


if __name__ == '__main__':
    main()
