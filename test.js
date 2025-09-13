const axios = require('./axios');


async function sendlikes() {
  axios.post(
    "http://c1v741ky.k196114g.kjojdkjk.fgf666.top/wechat/freevote.json",
    "_token=hh0ZmAP6FRu8F7iueAeiNbOkrV7AKcA3Tzv7PHG1&id=84056&tk=d683c7517a5c908531ff1e7ebcc4e142",
    {
      headers: {
        "accept": "*/*",
        "accept-language": "zh-CN,zh;q=0.9",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        "x-requested-with": "XMLHttpRequest",
        "cookie": "token=d683c7517a5c908531ff1e7ebcc4e142; XSRF-TOKEN=eyJpdiI6Iml4TmFUQUNvdFd2ZUNWMVl3YVgxcEE9PSIsInZhbHVlIjoiQVo0MUpvSVE1XC9Pbjdsc01wXC9WM0dPOTRrVWVjVzM3K3c5UmpCeHJcLzRUcTFXS0xWWG5lWFBBYU1jM0VLRDRLRSIsIm1hYyI6ImJlMzdkNTA1MzE4ZDkwYzZlMThlM2I0MDBmZTRlMjQ4NzBjNGM3NDk4ZmI4ZDFkMDY0ZGRkYjUzYzIyNjk0ODYifQ%3D%3D; vote_session=eyJpdiI6IkNvSW1WSVR6VFQzM1Z1OXluZ3FXMmc9PSIsInZhbHVlIjoiQXV5Z09Wa2xtVVl3Y3FGMlhaeVhcL1JFNlwvcFFlK0R4VFNNRloxeGVcLzZ6ZlBHWk5aWWhvRXQ2cHlmZ3orUmhxbiIsIm1hYyI6IjNlYWRiNjQ2OWViNTAwNzM3ODdjNjczMjRjZDZkNzFmZGM3YzA1OTc4ZGRmMWUxNDFjZDdkODYxOGU3MDkxNDUifQ%3D%3D"
      },
      referrer: "http://c1v741ky.k196114g.kjojdkjk.fgf666.top/wechat/84056/works/d683c7517a5c908531ff1e7ebcc4e142.html",
      referrerPolicy: "strict-origin-when-cross-origin",
    },
  ).then((res)=>{
    console.log(res)
  }).catch((err)=>{
    console.log(err)
  })
}
