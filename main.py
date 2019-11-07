# /usr/bin/env python3
"""
这是一个将力扣中国(leetcode-cn.com)上的【个人提交】的submission自动爬到本地并push到github上的爬虫脚本。
请使用相同目录下的config.json设置 用户名，密码，本地储存目录等参数。
致谢@fyears， 本脚本的login函数来自https://gist.github.com/fyears/487fc702ba814f0da367a17a2379e8ba
"""

import unicodedata
import sys
import os
import time
from ProblemList import GetProblemId
import requests
import json
from bs4 import BeautifulSoup
import json
from pprint import pprint
import random
# ~~~~~~~~~~~~以下是无需修改的参数~~~~~~~~~~~~~~~~·
# 为了避免弹出一万个warning，which is caused by 非验证的get请求
requests.packages.urllib3.disable_warnings()

leetcode_url = 'https://leetcode-cn.com/'

sign_in_url = 'accounts/login/'
sign_in_url = leetcode_url + sign_in_url
submissions_url = 'submissions/'
submissions_url = leetcode_url + submissions_url
user_agent = {
    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.70 Safari/537.36'}

with open("config.json", "r") as f:  # 读取用户名，密码，本地存储目录
    temp = json.loads(f.read())
    USERNAME = temp['username']
    PASSWORD = temp['password']
    OUTPUT_DIR = temp['outputDir']
    TIME_CONTROL = 3600 * 24 * temp['time']
# config.json中 time: n 代表抓取距离现在 n天之内你的提交
# ~~~~~~~~~~~~以上是无需修改的参数~~~~~~~~~~~~~~~~·

# ~~~~~~~~~~~~以下是可以修改的参数~~~~~~~~~~~~~~~~·
START_PAGE = 0  # 从哪一页submission开始爬起，0是最新的一页
sleep_time = 5  # in second，登录失败时的休眠时间
# ~~~~~~~~~~~~以上是可以修改的参数~~~~~~~~~~~~~~~~·


def login(email, password):  # 本函数copy自https://gist.github.com/fyears/487fc702ba814f0da367a17a2379e8ba，感谢@fyears
    client = requests.session()
    client.encoding = "utf-8"
    client.headers.update(user_agent)

    while True:
        try:
            client.get(sign_in_url, verify=False)
            if 'csrftoken' in client.cookies:  # csrftoken may not in the cookies
                csrftoken = client.cookies['csrftoken']
                login_data = {'login': email,
                              'password': password,
                              'csrfmiddlewaretoken': csrftoken
                              }
            else:
                login_data = {'login': email,
                              'password': password
                              }
            client.headers.update(Referer=sign_in_url)
            result = client.post(sign_in_url, data=login_data)

            if result.ok:
                print("Login successfully!")
                print(client.headers)
                break
        except:
            print(result.status_code)
            print("Login failed! Wait till next round!")
            time.sleep(sleep_time)
    return client


def scraping(client):
    page_num = START_PAGE
    #visited = [0 for _ in range(1200)]

    file_format = {"cpp": ".cpp", "python3": ".py", "python": ".py", "mysql": ".sql", "golang": ".go", "java": ".java",
                   "c": ".c", "javascript": ".js", "php": ".php", "csharp": ".cs", "ruby": ".rb", "swift": ".swift",
                   "scala": ".scl", "kotlin": ".kt", "rust": ".rs"}

    submissions_url = "https://leetcode-cn.com/api/submissions/?offset=" + \
        str(page_num) + "&limit=20&lastkey="

    while True:
        random.seed(10)
        time.sleep(random.random()*3 + 0.5)  # 速度稍快就会被限制,具体多快会被限制我也不知道
        print("Now for page:", str(page_num))
        if page_num == START_PAGE:
            h = client.get(submissions_url, verify=False)
        else:
            submissions_url = submissions_url.replace(
                "offset=" + str(page_num - 1), "offset=" + str(page_num))
            h = client.get(submissions_url, verify=False)

        t = time.time()
        invalidset = set()
        html = json.loads(h.text)
        # pprint(html)

        if "submissions_dump" not in html:
            print("Warning! No previous submission is detected, please make sure you are logging in the correct account AND you once submitted codes on leetcode-cn.com")
            pprint(html)
            time.sleep(5)
            continue
        for idx, submission in enumerate((html["submissions_dump"])):
            # pprint(submission)
            # print("*"*50)
            Status = submission['status_display']
            Title = submission['title']
            Title = Title.strip()
            Title = Title.replace(' ', '')
            Lang = submission['lang']

            if Status != "Accepted":
                print(Title + " is not Accepted, continue for the next submission")
                continue

            # 时间管理，本行代表只记录最近的TIME_CONTROL天内的提交记录
            if t - submission['timestamp'] > TIME_CONTROL:
                return

            try:
                Pid = GetProblemId(Title)
                if Pid == 0 or Title in invalidset:
                    print(Title + "Failed ! Due to unknown Pid! ")
                    if Title not in invalidset:  # 第一次没找到
                        with open("Log.txt", "a") as log:
                            log.write(
                                "Unknown PID happened for {}\n".format(Title))

                        invalidset.add(Title)

                else:
                    # if visited[Pid] != 1:
                    newpath = OUTPUT_DIR + "/" + \
                        '{:0=4}'.format(Pid) + "." + Title  # 存放的文件夹名
                    print(newpath)
                    if not os.path.exists(newpath):
                        os.mkdir(newpath)

                    filename = '{:0=4}'.format(
                        Pid) + "-" + Title + file_format[Lang]  # 存放的文件名
                    totalpath = os.path.join(
                        newpath, filename)  # 把文件夹和文件组合成新的地址

                    if os.path.exists(totalpath):
                        # 跳过本地已记录的submission
                        print(newpath + "exists! Continue for the next submission!")
                        continue

                    with open(totalpath, "w") as f:  # 开始写到本地
                        # print ("Writing begins!", totalpath)
                        f.write(submission['code'])
                        print("Writing ends!", totalpath)
                        # visited[Pid] = 1 #保障每道题只记录最新的AC解
            except:
                with open("Log.txt", "a") as log:
                    log.write("Unknown error happened for {}\n".format(Title))

        page_num += 1


def git_push():
    today = time.strftime('%Y-%m-%d', time.localtime(time.time()))
    os.chdir(OUTPUT_DIR)
    print(os.getcwd())
    instructions = ["git add .", "git status",
                    "git commit -m \"" + today, "git push -u origin master"]
    for ins in instructions:
        os.system(ins)
        # print ("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
        print("~~~~~~~~~~~~~" + ins + " finished! ~~~~~~~~")
        # print ("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")


def main():
    email = USERNAME
    password = PASSWORD

    print('login')
    client = login(email, password)

    print('start scrapping')
    scraping(client)
    print('end scrapping')

    # git_push()
    #print('Git PUSH finished')


if __name__ == '__main__':
    main()
