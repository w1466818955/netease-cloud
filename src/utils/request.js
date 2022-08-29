/* 
* create by ygm on 2022-02-21
*
*说明：封装axios get()、post()请求
*      
*
*/

// 1.引入相关内容  axios 和 qs
import axios from "axios"
import qs from "qs"
// 引入local.js
import local from "./local.js"
// 引入elementui弹出提示框
import { Message } from 'element-ui';

// 2.配置基本请求URL、超时 (只要配置baseURL 系统会自动给请求地址添加 指定地址)
axios.defaults.baseURL = "http://127.0.0.1:3000";
// 设置默认的请求超时时间
axios.defaults.timeout = 5000;


// 3.请求拦截  发送请求之前进行某些操作  (如: 给所有接口添加 token)
// axios.interceptors.request.use(
//     config => {
//         let token = local.get('t_k') || "";
//         if (token) {
//             // 配置token
//             config.headers.Authorization = token;
//         }
//         // console.log(config)
//         return config;
//     },
//     error => {
//         return Promise.error(error);
//     })

// 4.响应拦截  在后端响应数据之前进行某些操作  (如: 优化代码---弹窗类提示)
axios.interceptors.response.use(
    response => {
        if (response.data.code != undefined && response.data.msg != undefined) {
            // 判断请求是否成功
            if (response.data.code == 200) {
                // 成功
                Message({
                    message: response.data.msg,
                    type: "success",
                });
            } else if (response.data.code == 1) {
                // 失败
                Message.error(response.data.msg);
            } else {
                //参数错误
                Message.error(response.data.msg);
            }
        }
        return response;
    })


// 5.封装get和post请求
export default {
    // 通用get方法
    get(url, params = {}) {
        return new Promise((resolve, reject) => {
            // 发送请求到接口
            axios.get(url, { params })
                .then(res => {
                    // 成功
                    resolve(res.data)
                })
                .catch(error => {
                    // 失败
                    reject(error)
                })
        })
    },

    // 通用post方法
    post(url, params = {}) {
        return new Promise((resolve, reject) => {
            // 发送数据到接口
            axios.post(url, qs.stringify(params))
                .then(res => {
                    // 成功
                    resolve(res.data)
                })
                .catch(err => {
                    // 失败
                    reject(err)
                })
        })
    }

}
