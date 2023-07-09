# -*- coding: utf-8 -*-
# /usr/bin/env python3

"""
爬取力扣中国（https://leetcode.cn）的个人AC代码，并提交到github仓库中。
在 config.json 中设置：用户名、密码、代码存储目录、最大爬取天数。
致谢 @fyears 的 login 函数来自 https://gist.github.com/fyears/487fc702ba814f0da367a17a2379e8ba
本代码原仓库地址: https://github.com/JiayangWu/LeetCodeCN-Submissions-Crawler
如爬虫失效，可在仓库中提出issue
"""


import requests
import argparse
from src.crawler import Crawler

parser = argparse.ArgumentParser(
    prog='LeetCode-submissions-crawler',
    description='Get all your submissions!')
parser.add_argument('-id', '--id', type=str, help="Your login id")
parser.add_argument('-pw', '--password', type=str, help="Your login password")
parser.add_argument('-o', '--output', type=str, help="Output path")
parser.add_argument('-d', '--day', type=int, help="Fetching codes in 'day'")
parser.add_argument(
    '-O',
    '--overwrite',
    action='store_true',
    help="If overwrite output",
    default=False)
parser.add_argument(
    '-R',
    '--refresh',
    action='store_true',
    help="If refresh problam set map",
    default=False)
parser.add_argument(
    '-sp',
    '--startpage',
    type=int,
    help="The page of submissions which to start fetching",
    default=0)
parser.add_argument(
    '-st',
    '--sleeptime',
    type=int,
    help="Sleep time in second after login failed",
    default=5)
parser.add_argument(
    '-pt',
    '--pagetime',
    type=int,
    help="Sleep time in second after page",
    default=3)
parser.add_argument(
    '-l',
    '--limit',
    type=int,
    help="Submissions count in one page",
    default=20)

if __name__ == '__main__':
    args = parser.parse_args()
    Crawler(args).execute()
