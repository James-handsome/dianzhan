const axios = require('../axios');
const { HttpProxyAgent } = require('http-proxy-agent');

function getIp() {
  return axios({
    method: 'get',
    url: 'http://diy.qydailiip.com/api/ip/api',
    params: {
      order: '202509130944492380',
      num: 30,
      sep: '\n',
      anonymity: 1,
      model: 'post',
      protocol: 'http',
      isp: '',
      kill_address: '',
      kill_port: '',
      address: '',
      port: '',
      type: 'json',
      apikey: '9c910906055cdbfedb34b56515085b49'
    }
  });
}


// fetch("http://c1v741ky.k196114g.kjojdkjk.fgf666.top/wechat/freevote.json", {
//   "headers": {
//     "accept": "*/*",
//     "accept-language": "zh-CN,zh;q=0.9",
//     "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
//     "proxy-connection": "keep-alive",
//     "x-requested-with": "XMLHttpRequest",
//     "cookie": "token=d683c7517a5c908531ff1e7ebcc4e142; XSRF-TOKEN=eyJpdiI6Iml4TmFUQUNvdFd2ZUNWMVl3YVgxcEE9PSIsInZhbHVlIjoiQVo0MUpvSVE1XC9Pbjdsc01wXC9WM0dPOTRrVWVjVzM3K3c5UmpCeHJcLzRUcTFXS0xWWG5lWFBBYU1jM0VLRDRLRSIsIm1hYyI6ImJlMzdkNTA1MzE4ZDkwYzZlMThlM2I0MDBmZTRlMjQ4NzBjNGM3NDk4ZmI4ZDFkMDY0ZGRkYjUzYzIyNjk0ODYifQ%3D%3D; vote_session=eyJpdiI6IkNvSW1WSVR6VFQzM1Z1OXluZ3FXMmc9PSIsInZhbHVlIjoiQXV5Z09Wa2xtVVl3Y3FGMlhaeVhcL1JFNlwvcFFlK0R4VFNNRloxeGVcLzZ6ZlBHWk5aWWhvRXQ2cHlmZ3orUmhxbiIsIm1hYyI6IjNlYWRiNjQ2OWViNTAwNzM3ODdjNjczMjRjZDZkNzFmZGM3YzA1OTc4ZGRmMWUxNDFjZDdkODYxOGU3MDkxNDUifQ%3D%3D"
//   },
//   "referrer": "http://c1v741ky.k196114g.kjojdkjk.fgf666.top/wechat/84056/works/d683c7517a5c908531ff1e7ebcc4e142.html",
//   "referrerPolicy": "strict-origin-when-cross-origin",
//   "body": "_token=hh0ZmAP6FRu8F7iueAeiNbOkrV7AKcA3Tzv7PHG1&id=84056&tk=d683c7517a5c908531ff1e7ebcc4e142",
//   "method": "POST",
//   "mode": "cors"
// });

async function sendlikes(ip) {
  const agent = new HttpProxyAgent(ip);
  return axios.post(
    "http://c1v741ky.k196114g.kjojdkjk.fgf666.top/wechat/freevote.json",
    "_token=hh0ZmAP6FRu8F7iueAeiNbOkrV7AKcA3Tzv7PHG1&id=84056&tk=d683c7517a5c908531ff1e7ebcc4e142",
    {
      headers: {
        "accept": "*/*",
        "accept-language": "zh-CN,zh;q=0.9",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        "x-requested-with": "XMLHttpRequest",
        "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 18_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.5 Mobile/15E148 Safari/604.1",
        "cookie": "token=d683c7517a5c908531ff1e7ebcc4e142; XSRF-TOKEN=eyJpdiI6Iml4TmFUQUNvdFd2ZUNWMVl3YVgxcEE9PSIsInZhbHVlIjoiQVo0MUpvSVE1XC9Pbjdsc01wXC9WM0dPOTRrVWVjVzM3K3c5UmpCeHJcLzRUcTFXS0xWWG5lWFBBYU1jM0VLRDRLRSIsIm1hYyI6ImJlMzdkNTA1MzE4ZDkwYzZlMThlM2I0MDBmZTRlMjQ4NzBjNGM3NDk4ZmI4ZDFkMDY0ZGRkYjUzYzIyNjk0ODYifQ%3D%3D; vote_session=eyJpdiI6IkNvSW1WSVR6VFQzM1Z1OXluZ3FXMmc9PSIsInZhbHVlIjoiQXV5Z09Wa2xtVVl3Y3FGMlhaeVhcL1JFNlwvcFFlK0R4VFNNRloxeGVcLzZ6ZlBHWk5aWWhvRXQ2cHlmZ3orUmhxbiIsIm1hYyI6IjNlYWRiNjQ2OWViNTAwNzM3ODdjNjczMjRjZDZkNzFmZGM3YzA1OTc4ZGRmMWUxNDFjZDdkODYxOGU3MDkxNDUifQ%3D%3D"
      },
      referrer: "http://c1v741ky.k196114g.kjojdkjk.fgf666.top/wechat/84056/works/d683c7517a5c908531ff1e7ebcc4e142.html",
      referrerPolicy: "strict-origin-when-cross-origin",
      httpAgent: agent
    },
  )
}

module.exports = {
  getIp,
  sendlikes
}
