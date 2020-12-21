// 认证规则
import {SET_CURRENT_USER, REMOVE_USER} from '../constants/constants'

const initState = {
  isAuthenticated: false,
  user: {}
}

const auth = (state = initState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        isAuthenticated: true,
        user: action.user
      }
    case REMOVE_USER:
      return initState
    default:
      return state
  }
}

export default auth