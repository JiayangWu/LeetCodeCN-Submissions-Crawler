import time
import requests
import json


class LeetcodeClient:
    LOGIN_PATH = 'accounts/login/'
    GRAPHQL_PATH = 'graphql/'

    def __init__(
            self,
            login_id,
            password,
            MAPPING_FILE,
            sleep_time=5,
            base_url='https://leetcode.cn/',
            logger=None) -> None:
        requests.packages.urllib3.disable_warnings()
        self.MAPPING_FILE = MAPPING_FILE
        self.login_id = login_id
        self.password = password
        self.sleep_time = sleep_time
        self.endpoint = base_url
        self.logger = logger
        self.client = requests.session()
        self.client.encoding = "utf-8"

        self.headers = {
            'Connection': 'keep-alive',
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.152 Safari/537.36'
        }

    def login(self) -> None:
        ATTEMPT = 3
        for try_cnt in range(ATTEMPT):
            login_url = self.endpoint + self.LOGIN_PATH
            self.client.get(login_url, verify=False)
            login_data = {
                'login': self.login_id,
                'password': self.password
            }
            result = self.client.post(
                login_url, data=login_data, headers={
                    'Referer': login_url})

            # result.url 判断是否真正登录成功
            if result.ok and result.url == self.endpoint:
                self.logger.info("Login successfully!")
                return
            self.logger.warning("Login failed, Wait till next round!")
            if try_cnt != ATTEMPT - 1:
                time.sleep(self.sleep_time)

        self.logger.error(
            "LoginError: Login failed, ensure your username and password is correct!"
        )

        raise Exception(
            "LoginError: Login failed, ensure your username and password is correct!")

    def getProblemSet(self) -> None:
        self.logger.info(
            'Starting updating problemset, which might take 2 mins')
        # 定义请求头

        with open(self.MAPPING_FILE, 'r', encoding='utf-8') as f:
            mapping = json.load(f)
        with open('query/query_update_problem_sets', 'r') as f:
            query_string = f.read()
        # 使用大数字来更新题集，100页100个题目数量
        for i in range(max((len(mapping) // 100) - 2, 0), 100):
            data = {
                'query': query_string,
                'variables': {
                    'categorySlug': '',
                    'skip': i * 100,
                    'limit': 100,
                    'filters': {}
                }
            }
            response = self.client.post(
                self.endpoint +
                self.GRAPHQL_PATH,
                json=data,
                headers=self.headers)
            questions = response.json(
            )['data']['problemsetQuestionList']['questions']

            if not questions:
                break

            for question in questions:
                mapping[question['titleCn'].replace(
                    " ", "")] = question['frontendQuestionId']

            print('.', end='', flush=True)

        with open(self.MAPPING_FILE, 'w', encoding='utf-8') as f:
            json.dump(mapping, f, ensure_ascii=False)
        self.logger.info('Completed updating problemset \n')

    def downloadCode(self, submission) -> str:
        with open('query/query_download_submission', 'r') as f:
            query_string = f.read()

        data = {
            'query': query_string,
            'operationName': "mySubmissionDetail",
            "variables": {
                "id": submission["id"]
            }
        }

        response = self.client.post(
            self.endpoint +
            self.GRAPHQL_PATH,
            json=data,
            headers=self.headers)
        submission_details = response.json()["data"]["submissionDetail"]
        return submission_details["code"] if submission_details else None
