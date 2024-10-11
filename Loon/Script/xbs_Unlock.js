/*
 * @Author: bgcode violetcode@icloud.com
 * @Date: 2024-10-11 21:17:59
 * @LastEditors: bgcode violetcode@icloud.com
 * @LastEditTime: 2024-10-11 22:15:38
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
function log(...logs) {
    return console.log(`[${new Date().toLocaleTimeString()}]${logs.map((l) => l ?? String(l)).join('\n')}`);
}
$httpClient.get(myRequest,function(errormsg,resp,data){
        const headers = getHtmlDoneHeaders()
        log(errormsg)
        log(JSON.stringify(resp.body))
        log(data)
        $done( {
            response: {
                status: 200,
                headers,
                body: data
            }
        });
    
})
