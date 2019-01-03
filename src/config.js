// 配置编译环境和线上环境之间的切换
let baseUrl = ''
if (process.env.NODE_ENV === 'development') {
  // 测试服务器
  baseUrl = 'http://114.115.212.12:8081/api/v1'
} else if (process.env.NODE_ENV === 'production') {
  // 线上服务器
  baseUrl = 'http://114.115.212.12:8081/api/v1'
}
export {
  baseUrl
}
