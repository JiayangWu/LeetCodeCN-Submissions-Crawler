import time
import requests

# 登录函数
def login(username, password, SLEEP_TIME=5, BASE_URL='https://leetcode.cn/', SIGNIN_URL='https://leetcode.cn/accounts/login/',):
    client = requests.session()
    client.encoding = "utf-8"

    try_cnt = 0
    while True:
        try:
            try_cnt += 1
            client.get(SIGNIN_URL, verify=False)
            login_data = {
                'login': username,
                'password': password
            }

            result = client.post(SIGNIN_URL, data=login_data, headers={'Referer':SIGNIN_URL})

            # result.url 判断是否真正登录成功
            if result.ok and result.url == BASE_URL:
                print("Login successfully!")
                break
            raise Exception("LoginError: Login failed, Wait till next round!")
        except Exception as e:
            # 尝试三次后，结束登录
            print(e)
            if try_cnt >= 3:
                print("LoginError: Login failed, ensure your username and password is correct!")
                return None
            # 存在用户密码正确，而登录失败的情况因此多次登录解决(暂未解决)
            time.sleep(SLEEP_TIME)
    return client