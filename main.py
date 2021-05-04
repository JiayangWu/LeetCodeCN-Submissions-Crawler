# -*- coding: utf-8 -*-
#/usr/bin/env python3
"""
这是一个将力扣中国(leetcode-cn.com)上的【个人提交】的submission自动爬到本地并push到github上的爬虫脚本。
请使用相同目录下的config.json设置 用户名，密码，本地储存目录等参数。
致谢@fyears， 本脚本的login函数来自https://gist.github.com/fyears/487fc702ba814f0da367a17a2379e8ba
原仓库地址：https://github.com/JiayangWu/LeetCodeCN-Submissions-Crawler
如果爬虫失效的情况，请在原仓库提出issue。
"""

import json
import os
import re
import sys
import time

import requests
from bs4 import BeautifulSoup

from ProblemList import GetProblemId

#~~~~~~~~~~~~以下是无需修改的参数~~~~~~~~~~~~~~~~·
requests.packages.urllib3.disable_warnings() #为了避免弹出一万个warning，which is caused by 非验证的get请求

leetcode_url = 'https://leetcode-cn.com/'

sign_in_url = leetcode_url + 'accounts/login/'
submissions_url = leetcode_url + 'submissions/'

config_path = "./config.json"

with open(config_path, "r") as f: #读取用户名，密码，本地存储目录
    config = json.loads(f.read())   
    USERNAME = config['username']
    PASSWORD = config['password']
    OUTPUT_DIR = config['outputDir']
    TIME_CONTROL = 3600 * 24 * config['time']

FILE_FORMAT = {"C++": ".cpp", "Python3": ".py", "Python": ".py", "MySQL": ".sql", "Go": ".go", "Java": ".java",
                "C": ".c", "JavaScript": ".js", "PHP": ".php", "C#": ".cs", "Ruby": ".rb", "Swift": ".swift",
                "Scala": ".scl", "Kotlin": ".kt", "Rust": ".rs"}
#~~~~~~~~~~~~以上是无需修改的参数~~~~~~~~~~~~~~~~·

#~~~~~~~~~~~~以下是可以修改的参数~~~~~~~~~~~~~~~~·
START_PAGE = 0  # 从哪一页submission开始爬起，0是最新的一页
SLEEP_TIME = 5  # in second，登录失败时的休眠时间
#~~~~~~~~~~~~以上是可以修改的参数~~~~~~~~~~~~~~~~·

def login(username, password): # 本函数修改自https://gist.github.com/fyears/487fc702ba814f0da367a17a2379e8ba，感谢@fyears
    client = requests.session()
    client.encoding = "utf-8"

    while True:
        try:
            client.get(sign_in_url, verify=False)

            login_data = {
                'login': username, 
                'password': password
            }
            
            result = client.post(sign_in_url, data = login_data, headers = dict(Referer = sign_in_url))
            
            if result.ok:
                print ("Login successfully!")
                break
        except:
            print ("Login failed! Wait till next round!")
            time.sleep(SLEEP_TIME)

    return client

def scraping(client):
    page_num = START_PAGE
    visited = set()
    
    while True:
        print ("Now for page:", str(page_num))
        submissions_url = "https://leetcode-cn.com/api/submissions/?offset=" + str(page_num) + "&limit=20&lastkey="

        html = client.get(submissions_url, verify=False)
        html = json.loads(html.text)
        cur_time = time.time()
        if not html.get("submissions_dump"):
            print("Warning! No previous submission is detected, please make sure you are logging in the correct account AND you once submitted codes on leetcode-cn.com")
            break
            
        for submission in html["submissions_dump"]:
            submission_status = submission['status_display']
            problem_title = submission['title'].replace(" ","")
            submission_language = submission['lang']
            
            if submission_status != "Accepted":
                print(problem_title + " was not Accepted, continue for the next submission")
                continue

            if cur_time - submission['timestamp'] > TIME_CONTROL: # 时间管理，本行代表只记录最近的TIME_CONTROL天内的提交记录
                print("Finished scraping for the desired time.")
                return

            try:
                problem_id = GetProblemId(problem_title)
                if problem_id == "0":
                    print (problem_title + " failed! Due to unknown Pid! Please check ProblemList.py to see if this question is included.")
                else:
                    if problem_id + submission_language not in visited:
                        visited.add(problem_id + submission_language) # 保障每道题只记录每种语言最新的AC解
                        full_path = generatePath(problem_id, problem_title, submission_language)
                        code = downloadCode(submission, client)
                        with open(full_path, "w") as f: # 开始写到本地
                            f.write(code)
                            print ("Writing ends!", full_path)
                            
            except FileNotFoundError as e:
                print("Output directory doesn't exist")
                
            except Exception as e:
                print(e, " Unknwon bug happened, please raise an issue with your log to the writer.")

        time.sleep(1)           
        page_num += 20

def gitPush():
    today = time.strftime('%Y-%m-%d',time.localtime(time.time()))
    os.chdir(OUTPUT_DIR)
    instructions = ["git add .","git status", "git commit -m \""+ today + "\"", "git push -u origin master"]
    for ins in instructions:
        os.system(ins)
        print ("~~~~~~~~~~~~~" + ins + " finished! ~~~~~~~~")

def downloadCode(submission, client):
    headers = {
        'Connection': 'keep-alive',
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.152 Safari/537.36'
    }   
    param = {'operationName': "mySubmissionDetail", "variables": {"id": submission["id"]},
                'query': "query mySubmissionDetail($id: ID\u0021) {  submissionDetail(submissionId: $id) {    id    code    runtime    memory    statusDisplay    timestamp    lang    passedTestCaseCnt    totalTestCaseCnt    sourceUrl    question {      titleSlug      title      translatedTitle      questionId      __typename    }    ... on GeneralSubmissionNode {      outputDetail {        codeOutput        expectedOutput        input        compileError        runtimeError        lastTestcase        __typename      }      __typename    }    __typename  }}"
                    }

    param_json = json.dumps(param).encode("utf-8")
    response = client.post("https://leetcode-cn.com/graphql/", data = param_json, headers = headers)
    submission_details = response.json()["data"]["submissionDetail"]

    return submission_details["code"]

def generatePath(problem_id, problem_title, submission_language):
    if problem_id[0].isdigit(): # 如果题目是传统的数字题号
        problem_id = int(problem_id)
        newpath = OUTPUT_DIR + "/" + '{:0=4}'.format(problem_id) + "." + problem_title #存放的文件夹名
        filename = '{:0=4}'.format(problem_id) + "-" + problem_title + FILE_FORMAT[submission_language] #存放的文件名
    else: # 如果题目是新的面试题
        newpath = OUTPUT_DIR + "/" + problem_id + "." + problem_title
        filename = problem_id + "-" + problem_title + FILE_FORMAT[submission_language] #存放的文件名
    
    if not os.path.exists(newpath):
        os.mkdir(newpath)
    
    full_path = os.path.join(newpath, filename) #把文件夹和文件组合成新的地址
    return full_path

def main():
    print('Login')
    client = login(USERNAME, PASSWORD)

    print('Start scrapping')
    scraping(client)
    print('End scrapping')

    gitPush()
    print('Git push finished')

if __name__ == '__main__':
    main()
