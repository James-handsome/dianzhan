const axios = require('./axios');
const api = require('./api');
//const { HttpProxyAgent } = require('http-proxy-agent');
// const fetch = require('node-fetch');
let count = 0;
const { HttpProxyAgent } = require('http-proxy-agent');

let ipList = [];

async function getIp() {
    let res = await api.getIp();
    if (res) {
        ipList = res.list;
        console.log('获取到IP列表:', ipList);
    } else {
        console.log('获取IP失败，使用默认IP');
        ipList = [];
    }
}

function like(ip) {
    const httpAgent = new HttpProxyAgent(ip);
    count++;
    console.log(`第${count}次点赞，使用IP: ${ip}`);

    api.sendlikes(ip,httpAgent).then((res) => {
        console.log('点赞成功:', res.data);
    }).catch(err => {
        console.error('点赞失败:', err.message);
    });
}

async function mainLoop() {
    while (true) {
        await getIp();
        if (!ipList || ipList.length === 0) {
            console.log('IP列表为空，等待5秒重试');
            await new Promise(r => setTimeout(r, 5000));
            continue;
        }
        for (let ip of ipList) {
            for (let i = 0; i < 3; i++) {
                await like(ip);
                // 每次点赞间隔1-2秒
                await new Promise(r => setTimeout(r, Math.floor(Math.random() * 1000) + 1000));
            }
        }
        // IP列表用完后，重新获取
        console.log('本轮IP已用完，重新获取IP...');
    }
}

mainLoop();


