import json
import requests

def get_problemset():
    url = 'https://leetcode.cn/graphql/'
    # 定义请求头
    headers = {
        'Accept-Encoding':'gzip, deflate, br',
        'Accept-Language':'zh-CN,zh;q=0.9,en;q=0.8',
        'Content-Type': 'application/json',
        'Accept-Charset': 'utf-8',
    }

    s = requests.Session()
    titles, frontIds=[], []
    for i in range(100):
        data = {'query': '\n    query problemsetQuestionList($categorySlug: String, $limit: Int, $skip: Int, $filters: QuestionListFilterInput) {\n  problemsetQuestionList(\n    categorySlug: $categorySlug\n    limit: $limit\n    skip: $skip\n    filters: $filters\n  ) {\n    hasMore\n    total\n    questions {\n      acRate\n      difficulty\n      freqBar\n      frontendQuestionId\n      isFavor\n      paidOnly\n      solutionNum\n      status\n      title\n      titleCn\n      titleSlug\n      topicTags {\n        name\n        nameTranslated\n        id\n        slug\n      }\n      extra {\n        hasVideoSolution\n        topCompanyTags {\n          imgUrl\n          slug\n          numSubscribed\n        }\n      }\n    }\n  }\n}\n    ',
            'variables': {
                'categorySlug': '',
                'skip': i*100,
                'limit': 100,
                'filters': {}
            }
        }

        response = s.post(url, headers=headers, json=data).json()
        questions=response['data']['problemsetQuestionList']['questions']

        if len(questions)==0: break

        for j in range(len(questions)):
            titles.append(questions[j]['titleCn'].replace(" ", ""))
            frontIds.append(questions[j]['frontendQuestionId'])
        
    mapping=dict(zip(titles, frontIds))

    with open('./mapping.json', 'w', encoding='utf-8') as f:
        json.dump(mapping, f, ensure_ascii=False)
    print('更新题集完成')

if __name__=='__main__':
    get_problemset()