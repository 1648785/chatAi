import axios from "axios";

const request = axios.create({
    timeout: 50000
})
request.interceptors.request.use(config => {
    config.headers['Content-Type'] = 'application/json;charset=utf-8'
    return config
}, error => {
    return Promise.reject(error)
})
request.interceptors.response.use(
    response => {
        let res = response.data; //取出返回 data 的内容
// 如果是返回的文件
        if (response.config.responseType === 'blob') {
            return res
        }
// 如果返回的是 string ,就转成 json 对象
        if (typeof res === 'string') {
            res = res ? JSON.parse(res) : res
        }
        return res;
    }, error => {
        console.log('err' + error) // 输出错误信息
        return Promise.reject(error)
    }
)
export default request