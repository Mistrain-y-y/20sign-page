import axios from 'axios'
import {ADD_FLASH_MSG, REMOVE_FLASH_MSG} from '../constants/constants'

// 登录
export const signUpRequest = userData => dispatch => {
  return axios.post('api/users', userData)
  // 亲测: 必须要返回才可以 .then
}

// 增加提示信息
export const addFlashMsg = msg => (
  // msg 里面有 type 和 text
  {
    type: ADD_FLASH_MSG,
    msg
  }
)

// 点击 × 移除提示信息
export const removeFlashMsg = id => (
  {
    type: REMOVE_FLASH_MSG,
    id
  }
)

// 失去焦点时发送请求验证用户名是否重复
export const checkUsername = username => dispatch => {
  return axios.get(`/api/users/${username}`)
}

// 登录
export const loginAction = data => dispatch => {
  return axios.post('/api/login', data)// data 是一个对象
}