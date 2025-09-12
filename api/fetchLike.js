const axios = require('../axios');
async function fetchLike() {
    axios.post(
        "http://g63y461p.q569z13b.4whx758v.kjojdkjk.fgf666.top/wechat/freevote.json",
        "_token=DQ0XXv9V9TrYRTS1ppM7Pm7tK8UZDLdg2BKQ99hN&id=84056&tk=d9567effad40064ee884df8c3715eaf2",
        {
            headers: {
                "accept": "*/*",
                "accept-language": "zh-CN,zh;q=0.9",
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "x-requested-with": "XMLHttpRequest",
                "cookie": "token=d9567effad40064ee884df8c3715eaf2; XSRF-TOKEN=eyJpdiI6IkpPY2tsN005VFI1TlBEMEtsN09sSnc9PSIsInZhbHVlIjoiczZpa0pVemozRmgyVkx6T3V2cEg2Tlh5Y01SWDh3U3pObFFleWt0OXFmM3M1VnZQZTBualgyMHphWm1hVElrYiIsIm1hYyI6IjZmOTQyYTBkOTc5YWVhNmE5YzYxNzk0YTk0YjQwZDNlYWQ2MTY0YTBlY2JjMjQzZGJmMGQyOWFiYTc0YjcwNDEifQ%3D%3D; vote_session=eyJpdiI6ImxVU1NvWWFiZk5TT2xlS3pJZmlNT3c9PSIsInZhbHVlIjoiR0l2UzRYbXpVYXQ4UlJvS0JvUVpPV3VsNGJVTzM3dDROVGxWaFBpRnljV1Z5eHdnRFwvT0thelFNNjJ6UCtPWWEiLCJtYWMiOiJkNmQ4YWYxMjMwMjEzZDE1MmI4NzNjYjUzYTEwZjk3Y2Y0ZWUyMmZmMjU5NDgzNmRhZjUyZmEwMTNhZWZkN2NmIn0%3D"
            },
            "referrer": "http://g63y461p.q569z13b.4whx758v.kjojdkjk.fgf666.top/wechat/84056/works/1a7d28fc6ae9d978009b56b54c55ca8a.html",
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