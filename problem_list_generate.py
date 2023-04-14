# 将题目生成字典并保存到 ./problemsPage
import os
from ProblemList import GetProblemId


def update_problemList(pages=28, save_file='./problems_page/problems.txt'):
    dic = {}
    num = 0
    for i in range(1, pages+1):
        fileName = './problems_page/'+str(i)+'.txt'
        with open(fileName, "r", encoding='UTF-8') as f:
            ff = f.readlines()
            for line in ff:
                pid, title = line.split("\t")
                pid = pid.replace(" ", "")
                title = title.rstrip().replace(" ", "")
                num += 1
                # 跳过已经存在的题目
                # if((pid.isdigit() and int(pid) <= 1840) or GetProblemId(title) != '0'):
                #     continue
                dic[title] = pid

    # 2722 2590 有一部分冲突，因此减少了结果
    print(num, len(dic))
    with open(save_file, "w+", encoding='UTF-8') as f:
        f.write(str(dic))


update_problemList()
