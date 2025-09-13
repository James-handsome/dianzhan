const axios = require('axios');

const instance = axios.create({
    // httpAgent: agent,
    // httpsAgent: agent,
    //baseURL: 'https://api.example.com', // 根据实际情况修改
    timeout: 10000,
    //proxy: false,
    headers: {
        'Content-Type': 'application/json'
    }
});

// 请求拦截器
instance.interceptors.request.use(
    config => {
        // 可以在这里添加 token 或其他请求头
        // config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    error => Promise.reject(error)
);

// 响应拦截器
instance.interceptors.response.use(
    response => response.data,
    error => {
        // 可以统一处理错误
        return Promise.reject(error);
    }
);


module.exports = instance;