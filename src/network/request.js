import axios from "axios"
export function request(config) {
    const instance = axios.create({
            baseURL: '',
            timeout: 5000
        })
        // 拦截器，拦截响应和请求
        // 请求拦截，
    instance.interceptors.request.use(config => {
        console.log(config);
        return config
    }, err => {
        console.log(err)
    });
    // 响应拦截
    instance.interceptors.response.use(res => {
        console.log(res);
        return res.data
    }, err => {
        console.log(err);
    });

    return instance(config)
}