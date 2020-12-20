// 注册成功的提示信息
import React, { Component } from 'react'
import { connect } from 'react-redux'
import FlashMsg from './flashMsg'
import * as actions from '../../actions/actions'
import { bindActionCreators } from 'redux'

class FlashLists extends Component {
  removeMsg = () => {
    // 点击 × 移除提示信息
    const id = this
      .props
      .actions
      .removeFlashMsg(id)
  }
  render() {
    const { flash } = this.props
    // flash 是一个数组
    return (
      <div className="container">
        {flash.map(item => (<FlashMsg
          key={item.id}
          msg={{
            type: item.type,
            text: item.text,
            id:item.id
          }}
          removeMsg={this.props.actions.removeFlashMsg}
        />))
        }
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(state => state, mapDispatchToProps)(FlashLists)