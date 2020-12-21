// 每个网络请求中, 都要携带 token 令牌
import axios from 'axios'

const setToken = token => {
  if (token) {// 如果有 token, 就设置公共请求头
    axios.defaults.headers.common['Authorization'] =
    `mistrain ${token}`
    // Authorization 用于验证请求合法性的认证消息
  } else {// 传入 false 就删除公共请求头
    delete axios.defaults.headers.common['Authorization']
  }
}

export default setToken