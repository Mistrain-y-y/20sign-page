import React, { Component } from 'react'

// 有成功和失败两种提示信息

export default class FlashMsg extends Component {
  render() {
    const { text, type, id } = this.props.msg
    const { removeMsg } = this.props
    return (
      <div className={["alert",
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