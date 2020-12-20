// 提示信息
import {ADD_FLASH_MSG, REMOVE_FLASH_MSG} from '../constants/constants'
// 引入生成随机 id 的模块
import shortid from 'shortid'
// 引入根据属性找到索引的方法
import findIndex from 'lodash/findIndex'

const flash = (state = [], action) => {
  switch(action.type) {
    case ADD_FLASH_MSG:// 添加提示信息
      return [
        ...state,
        {
          id: shortid.generate(),
          type: action.msg.type,
          text: action.msg.text
        }
      ]
      case REMOVE_FLASH_MSG:// 移除提示信息
      const index = findIndex(state, {id: action.id})// 返回当前查找属性的位置
      if (index >= 0) {// 存在
        return [...state.slice(0, index), ...state.slice(index + 1)]
      }
      return state
    default:
      return state
  }
}

export default flash