import axios from 'axios'

export const signUpRequest = userData => dispatch => {
  return axios.post('api/users', userData)
  // 亲测: 必须要返回才可以 .then
}