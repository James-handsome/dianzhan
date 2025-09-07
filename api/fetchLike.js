const axios = require('../axios');

async function fetchLike() {
    axios.post(
        "http://c23768e6.o456od6u.kjojdkjk.fgf666.top/wechat/freevote.json",
        "_token=lVmxlz5aArtpBzzoBDmlYpeQLVjPJRAwLDAo0NTe&id=84056&tk=73949ece31e473cba14a261bbd5f86c2",
        {
            headers: {
                "accept": "*/*",
                "accept-language": "zh-CN,zh;q=0.9",
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "x-requested-with": "XMLHttpRequest",
                "cookie": "token=73949ece31e473cba14a261bbd5f86c2; XSRF-TOKEN=eyJpdiI6IkdoN0R5XC9nclgzcDN4U2w5a2tqVkdRPT0iLCJ2YWx1ZSI6IjJNNkczQmdaOElMT09Oc1FRRU1GQ0hKK2toYmN3TTk4ZmxESDIwQnhGZ05rbVNvbkNqVFlmMzB3WHVJOTNvckkiLCJtYWMiOiJiNjdmMTE1OTM1MjY4NjcxNGUwZTNkNTQ4YWIwNTNkN2Y0OGFlZjViNjcxODdhMTEwYzIxMGYxYWI0NzI5NTEwIn0%3D; vote_session=eyJpdiI6InhBamNNN2dOYjRUMnRPNWxPUGtmYmc9PSIsInZhbHVlIjoiMjFodEV3cTY5UW9jOW9vOTFNSkVKM2h5TlhlRjQxZWxnR2h6NkQ4YXBjTDZqdWVTek9iRVFJajduWjJaTUNqeSIsIm1hYyI6IjVhZDczNGZmZjk3M2M0NTcwODY0ZTMxNjEzNzFiZTMyMzExZTE3ZGM3NTBjYWY4Y2M5MzZkZTkxODJiZmJlOWMifQ%3D%3D"
            },
            referrer: "http://c23768e6.o456od6u.kjojdkjk.fgf666.top/wechat/84056/works/73949ece31e473cba14a261bbd5f86c2.html",
            referrerPolicy: "strict-origin-when-cross-origin"
        }
    ).then((res) => {
        console.log('点赞成功:', res);
    }).catch(err => {
        console.error('点赞失败:', err.message);
    });
}

module.exports = fetchLike;