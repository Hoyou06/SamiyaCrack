/*
今日热榜
https://raw.githubusercontent.com/maxduke/Rules/master/Surge/Script/jrrb.js
tf链接 https://testflight.apple.com/join/51y2x3uo

http-response https:\/\/api\.tophub\.today\/account\/sync
hostname= api.tophub.today
2292599349
4811209694
4258965428
*/

var obj = JSON.parse($response.body);
 obj={
 "data": {
  "is_vip": "1",
  "vip_expired": "4092599349",
  "is_vip_now": true
 },
 "error": false,
 "status": 200
};
$done({body: JSON.stringify(obj)});


