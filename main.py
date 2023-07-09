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
from src.crawler import Crawler

# 避免验证 https 证书的报错
requests.packages.urllib3.disable_warnings()

if __name__ == '__main__':
    Crawler().execute()
