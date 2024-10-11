/*
 * @Author: bgcode violetcode@icloud.com
 * @Date: 2024-10-11 21:17:59
 * @LastEditors: bgcode violetcode@icloud.com
 * @LastEditTime: 2024-10-11 22:00:48
 * @FilePath: /ios_rule/Loon/Script/xbs_Unlock.js
 * @Description: 用于重写js脚本
 */
const url = "https://raw.githubusercontent.com/bgvioletsky/QX/main/rewrite_remote/xbs_render/render.html";
const myRequest = {
    url: url
};


$httpClient.get(myRequest).then(xx => {
    headers = xx.headers;   
    $done( {response: {
        status: 200,
        headers,
        body: xx.body
    }});
}, reason => {
    $done();
});
