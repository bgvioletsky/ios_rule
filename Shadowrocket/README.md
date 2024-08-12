<!--
 * @Author: bgcode
 * @Date: 2024-08-12 20:44:35
 * @LastEditors: bgcode
 * @LastEditTime: 2024-08-12 21:11:27
 * @Description: 
 * @FilePath: /rule/Shadowrocket/README.md
-->
[Script]
EmbyPremiere = type=http-response,script-path=https://cdn.jsdelivr.net/gh/bgvioletsky/ios_rule/Shadowrocket/EmbyPremiere.js,pattern=^https?:\/\/mb3admin.com\/admin\/service\/registration\/validateDevice,max-size=131072,requires-body=true,timeout=10,enable=true

[MITM]
hostname = mb3admin.com