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