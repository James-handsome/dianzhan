const axios = require('../axios');

function getIp() {
    return axios({
        url: 'http://demo.spiderpy.cn/get',
        method: 'GET',
    })
}
function sendlikes(httpAgent) {
    const url = "http://6p24und1.sso72848.ji88pu21.kjojdkjk.fgf666.top/wechat/freevote.json";
    const headers = {
        "accept": "*/*",
        "accept-language": "zh-CN,zh;q=0.9",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        "x-requested-with": "XMLHttpRequest",
        "cookie": "token=611c4d8de20a70a74d8f05e5a9c2faae; XSRF-TOKEN=eyJpdiI6IjRaSytTVVJNSGpuTk5ZbURkUk5wdXc9PSIsInZhbHVlIjoieEJKRkVqUElkc1k4TjIyYVFPeSt0eEZlek5QZkFMMEorMFFWZUl3Nmx0a1Vrc2FEU1pXSEV3anh1czJ6aW5RMiIsIm1hYyI6ImZlYjI3YmViNzNjNWU4YTQ3NWE4ZWNhOTU2MjhjOTQxMzllMmJmZDJiYTM1ZjhlYzI3MDljOTVjZmRkYjA5ZjUifQ%3D%3D; vote_session=eyJpdiI6Ilo0RDdhUXlHVFRLVVRodTJoMk5mXC9RPT0iLCJ2YWx1ZSI6ImVWdGN3cCs3WlJMODR5WGp6VVZoNkZHXC9rOUNhcXB6MFBqV28wdHU3aWFzZ0NzZ3pjK3lIK2tBb1VqQmhyU3lJIiwibWFjIjoiYTU2YmQyMDM1ZWJlYTk0YjBkY2ZkOTY1M2IxNjFkMDlmMWVlZDNjOGUzMzE0ZGE0MDU4NGYwMGY1YWY0MjAxMiJ9"
    };
    const data = "_token=yZVqqquXxVgjTBtBdEqtvi4pXkP2clNgaXby39RU&id=84056&tk=611c4d8de20a70a74d8f05e5a9c2faae";
    const config = {
        url,
        method: "POST",
        headers,
        data
    };
    if (httpAgent) {
        config.httpAgent = httpAgent;
    }
    return axios(config);
}

module.exports = {
    getIp,
    sendlikes
}