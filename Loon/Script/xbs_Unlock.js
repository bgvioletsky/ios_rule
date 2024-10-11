/*
 * @Author: bgcode
 * @Date: 2024-08-05 12:51:41
 * @LastEditors: bgcode
 * @LastEditTime: 2024-08-09 06:32:38
 * @Description: 
 * @FilePath: /QX/rewrite_remote/xbs_render/render.js
 */
const url = "https://raw.githubusercontent.com/bgvioletsky/QX/main/rewrite_remote/xbs_render/render.html";
const myRequest = {
    url: url
};

$httpClient.get(myRequest).then(response => {
    $done({body: response.body});
}, reason => {
    $done();
});