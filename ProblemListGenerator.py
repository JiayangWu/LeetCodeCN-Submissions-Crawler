import requests, json, re
from bs4 import BeautifulSoup

def scrape_leetcode_solutions():
    with open("LeetCodeCN.html", "r") as f:
        response = f.read()
    soup = BeautifulSoup(response, 'html.parser')
    tbody = soup.find('tbody', class_='reactable-data')

    # 获取题目列表
    rows = tbody.find_all('tr')

    dict = {}
    for row in rows:
        cells = row.find_all('td')
        number = cells[1].text.strip()

        title = cells[2].text.strip()
        title = re.sub(r"\xa0+", "", title)
        title = re.sub("\n                                                        ", "", title)
        title = re.sub(" ", "", title)
        dict[title] = number
    print(dict)

# 调用函数进行爬取
solutions = scrape_leetcode_solutions()
