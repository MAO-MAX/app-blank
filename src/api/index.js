/**
 * @describe  存放各种API请求
 * @example GET(url, query, options)
 *          POST(url, body, options)
 */

import {GET, POST} from './config/index.js'

// 获取首页信息
export function getData(params, options) {
    let url = '/tokens/' + params.tokenId
    return GET(url, params.query, options)
}

// 是否关注
export function follow(data, options) {
    return POST('/users/' + data.user_id + '/follow', data.body, options)
}
