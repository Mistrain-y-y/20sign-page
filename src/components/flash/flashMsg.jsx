import React, { Component } from 'react'

// 有成功和失败两种提示信息

export default class FlashMsg extends Component {
  componentDidMount() {
    // 设定一个定时器, 提示信息显示2秒后自动消失
    this.timer1 = setTimeout(() => {
      this.msg.style.opacity = 0
    }, 2500)
    this.timer2 = setTimeout(() => {
      this.props.removeMsg(this.props.msg.id)
    }, 3000)
  }
  componentWillUnmount() {
    clearTimeout(this.timer1)
    clearTimeout(this.timer2)
  }
  render() {
    const { text, type, id } = this.props.msg
    const { removeMsg } = this.props
    return (
      <div 
      style={{transition: '0.5s'}}
      // transition 是在 setTimeout 结束后再延长时间改变
      ref={item => this.msg = item}
      className={["alert",
        type === 'success' ? "alert-success" : "alert-danger"
      ].join(' ')}>
        {text}
        <button
          onClick={() => removeMsg(id)}
          className="close"
        >×</button>
      </div>
    )
  }
}