const fetch = require('node-fetch');


fetch("http://4477381v.phe4nvub.1m327z37.kjojdkjk.fgf666.top/wechat/freevote.json", {
    "headers": {
        "accept": "*/*",
        "accept-language": "zh-CN,zh;q=0.9",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        "x-requested-with": "XMLHttpRequest",
        "cookie": "token=830faacb41b6db3bcc791a0a364b5287; XSRF-TOKEN=eyJpdiI6Ind6XC92aysxUVoxWVNwYlFvWVFRMG9BPT0iLCJ2YWx1ZSI6ImJKOXcrWEZ1WmtkaHpRUmkxWEVTWlRkTG5NSmhXMkl5Z1ExMkQ2UkVjKzBmbkNiVFwvT29sNVJtdlBpNHBYV0ljIiwibWFjIjoiZmUxZmJkODVjY2Y2NGM0Y2RjNzkyYzUwYzM0MTA1ZmM3NTkwMmNkYmJmODg3ODAzYTFkZDY4ZDBhNjcxNTUyNCJ9; vote_session=eyJpdiI6IkY4U245MVVcLzR2TTM0bU40QzdEOGZ3PT0iLCJ2YWx1ZSI6ImRFS1dWTGM4SGZ1NDlHK25KaWlPNG51YTdFcjQxSWlwMzNwYzFXY3k0clwvSUdsV3B4bEI1cEZlUitjMTJZaE1WIiwibWFjIjoiYTg3NTc5MWQxNzZlNDQ4ZDNmMDJmYzE0ZDA4ZjQyZTQxODY3M2M0YjFhY2Q5ZWUwYzkyMzk5Y2Q5YzJlOGRlZCJ9"
    },
    "referrer": "http://4477381v.phe4nvub.1m327z37.kjojdkjk.fgf666.top/wechat/84056/works/830faacb41b6db3bcc791a0a364b5287.html",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": "_token=PocTOZS7ofBC3u33RLXK2sQMljqnER0El1CoXHBF&id=84056&tk=830faacb41b6db3bcc791a0a364b5287",
    "method": "POST",
    "mode": "cors"
}).then(res => res.json()).then(res => {
    console.log(res)
});