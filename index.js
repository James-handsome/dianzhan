const api = require('./api');
let count = 0;

let ipList = [];
//获取代理ip
async function getIp() {
    let res = await api.getIp();
    if (res) {
        console.error('获得新IP--------------------------------------------------------------------------------------------------->')
        ipList = res.map(item => `http://${item.proxy}`);
    }
    console.log(ipList);
}

//使用代理ip点赞
function like(ip) {
    count++;
    console.log(`第${count}次点赞，使用IP: ${ip}`);
    api.sendlikes(ip).then((res) => {
        console.log('点赞成功:👍👍👍👍👍👍👍👍👍👍👍', res);
    }).catch(err => {
        console.error('点赞失败:', err.message);
    });
}
//主循环
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


