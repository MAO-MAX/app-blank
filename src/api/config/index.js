/**

 * @description 网络请求框架封装
 */

import Axios from 'axios'
import QS from 'querystring'
import {baseUrl} from '../../config.js'

// TODO 设置请求基本路径，所有请求路径之前会加上基本路径
Axios.defaults.baseURL = baseUrl

// TODO 设置超时时间
Axios.defaults.timeout = 10000

// TODO 设置请求头
Axios.defaults.headers = {
  // 'Access-Control-Allow-Origin': '*',
  // 'Content-Type': 'application/json'
}

// TODO http code 校验
Axios.defaults.validateStatus = function (status) {
    return status
}

// TODO GET 请求 params 序列化
Axios.defaults.paramsSerializer = function (params) {
    return QS.stringify(params)
}

// TODO 设置POST等请求 body 序列化
// Axios.defaults.transformRequest = [function (body) {
//   let data = body || {};
//   if (body instanceof window.FormData) {
//     return body
//   }
//   return JSON.stringify(data)
// }]

// TODO 设置统一请求拦截
Axios.interceptors.response.use(response => {
  // 对于所有请求的不同的状态码进行不同的业务处理
    if (response.data.code === -1) {
        console.log(response.msg)
    }
    return response.data
}, error => {
    return Promise.reject(error)
})

/**
 * @description 统一 GET 请求
 * @param url
 */
function GET(url, params, option) {
    if (option) {
        for (var property in option) {
            Axios.defaults[property] = option[property]
        }
    }
    return new Promise((resolve, reject) => {
        Axios.get(url, {params})
      .then(response => {
          resolve(response)
      })
      .catch(error => {
          reject(error)
      })
    })
}

/**
 * @description 统一 POST 请求
 * @param url
 * @param body --> POST 请求 data
 */
function POST(url, body, option) {
    if (option) {
        for (var property in option) {
            Axios.defaults[property] = option[property]
        }
    }
    return new Promise(function (resolve, reject) {
        Axios.post(url, body)
          .then(response => {
              resolve(response)
          })
        .catch(error => {
            reject(error)
        })
    })
}

export {
  GET,
  POST
}
