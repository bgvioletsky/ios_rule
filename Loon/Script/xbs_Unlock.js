/*
 * @Author: bgcode violetcode@icloud.com
 * @Date: 2024-10-11 21:17:59
 * @LastEditors: bgcode violetcode@icloud.com
 * @LastEditTime: 2024-10-11 22:03:51
 * @FilePath: /ios_rule/Loon/Script/xbs_Unlock.js
 * @Description: 用于重写js脚本
 */
const url = "https://raw.githubusercontent.com/bgvioletsky/QX/main/rewrite_remote/xbs_render/render.html";
const myRequest = {
    url: url
};

function getBaseDoneHeaders(mixHeaders = {}) {
    return Object.assign({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST,GET,OPTIONS,PUT,DELETE',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    },
    mixHeaders
)
}

function getHtmlDoneHeaders() {
    return getBaseDoneHeaders({
        'Content-Type': 'text/html;charset=UTF-8'
    })
}

$httpClient.get(myRequest).then(xx => {
    const headers = getHtmlDoneHeaders()
    $done( {
        response: {
            status: 200,
            headers,
            body: bg.html
        }
    });
}, reason => {
    $done();
});
