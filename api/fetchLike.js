const axios = require('../axios');


async function fetchLike() {
    axios.post(
        "http://updo651y.o15y2p64.w93b3fw6.eewsh.vpn777.top/wechat/freevote.json",
        "_token=LojI67bqqX6Y4mWUuc6o1VoaFNBMFU69g6XB25ia&id=84056&tk=663a5ef39f35c82ac1359a58445fcfae",
        {
            headers: {
                "accept": "*/*",
                "accept-language": "zh-CN,zh;q=0.9",
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "x-requested-with": "XMLHttpRequest",
               "cookie": "token=663a5ef39f35c82ac1359a58445fcfae; XSRF-TOKEN=eyJpdiI6IjJHQWQzNCtHV2ZIMVlCZ1RycVd1VFE9PSIsInZhbHVlIjoid1VIZnpTc2dhSVBMUG85K3pKT011SGQ2VFJmaDRMUVhYTW5EaUNSVWZxSmd5NkRtRFBHV2ZKeTVCV1JJUkJ2MCIsIm1hYyI6ImIzM2ZhMjIyZWMwNmIwYmQ3NjZjMjEzZDA4ODdkOTc3ZDk5YTI3NGQ5NWY3ODc5OTlhZDdkOWM4YzkyMTZmMDkifQ%3D%3D; vote_session=eyJpdiI6IlY2bCt2RHRGd0xlTXVIUThaQytTRmc9PSIsInZhbHVlIjoicUlFUzVWT0FZY0ZYTG1JcHRrYnNTcGdnbzRkY1NTK1wvNFBaTkVWcjNSZzlWYTNBY3NBa0pcL1VoeW9JZmVaVldRIiwibWFjIjoiNWRlZTU4OTkzYTY4OWRlYzk4NzFiZmFjNjE0OGM3YTUyZGQ5ZjIxMjQ5ODQwMDY4MmI3ODYzYzJiMDI1NzJjNCJ9"
            },
            referrer: "http://updo651y.o15y2p64.w93b3fw6.eewsh.vpn777.top/wechat/84056/works/663a5ef39f35c82ac1359a58445fcfae.html",
            referrerPolicy: "strict-origin-when-cross-origin"
        }
    ).then((res) => {
        if(res.code===2){
            console.log('点赞失败了😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭',res.msg);
        }else if(res.code===1){
            console.log('点赞成功👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍',res);
        }
    }).catch(err => {
        console.error('网络请求失败了===================================》', err.message);
    });
}

module.exports = fetchLike;