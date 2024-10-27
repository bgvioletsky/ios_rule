import requests
import asyncio
import re
host = "www.txtnovel.vip"
account = "bgcode"
password = "snC$3LfrxVq7f"
cookie = ""
data = {}

async def login(host, account, password):
    try:
        login_url = f"http://{host}/member.php?mod=logging&action=login&loginsubmit=yes&loginhash=LxEUe&mobile=2"
        data = {
            'formhash': '',
            'referer': f'http://{host}/plugin.php?id=dsu_paulsign:sign',
            'fastloginfield': 'username',
            'cookietime': '2592000',
            'username': account,
            'password': password,
            'questionid': '0',
            'answer': '',
            'submit': 'true'
        }
        headers = {
            'Host': host,
            'Referer': f'http://{host}/member.php?mod=logging&action=login&mobile=2',
            'Cookie': '',
            'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.5 Mobile/15E148 Snapchat/10.77.5.59 (like Safari/604.1)'
        }

        response = requests.post(login_url, data=data, headers=headers)
        # print(response.text)
        if "欢迎您回来" in response.text:
            set_cookie_header = response.headers.get("Set-Cookie")
            # print(set_cookie_header)
            if set_cookie_header:
                cookie = re.sub(r'expires=[^;]+;|path=/;|path=/,', '',set_cookie_header)
            return cookie
        else:
            return False
    except Exception as err:
        print(f"Error: {err}")
        return False



async def getformhash(host, cookie):
    try:
        url = f"http://{host}/plugin.php?id=dsu_paulsign:sign&mobile=yes"
        headers = {
            "Host": host,
            "Referer": f"http://{host}/member.php?mod=logging&action=login&mobile=2",
            "Cookie": cookie,
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.5 Mobile/15E148 Snapchat/10.77.5.59 (like Safari/604.1)"
        }

        response = requests.get(url, headers=headers)
        response.raise_for_status()  # 检查请求是否成功

        formhash_match = re.search(r'<input type="hidden" name="formhash" value="(.+?)" />', response.text, re.DOTALL)
        title_match = re.search(r'<div class="bm_h">(.+?)</div>', response.text, re.DOTALL)

        if formhash_match and title_match:
            formhash = formhash_match.group(1)
            title = title_match.group(1)
            print(f"formhash: {formhash}")
            return formhash, title
        else:
            return None, None

    except Exception as err:
        print(f"Error: {err}")
        return None, None
async def main():
    cookie = await login(host, account, password)
    await  getformhash(host,cookie)
   

# 运行异步主函数
asyncio.run(main())