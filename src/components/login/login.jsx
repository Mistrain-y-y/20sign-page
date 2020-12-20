// 登录页面

import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions/actions'
import { bindActionCreators } from 'redux'

class Login extends Component {
  state = {
    username: '',
    password: '',
    errors: {},
    isLoading: false
  }
  handleLogin = e => {
    e.preventDefault()
    const { username, password } = this.state
    if (username.trim() && password.trim()) {
      this.setState({
        isLoading: true
      })
      this.props.actions.loginAction({ username, password })
        .then(res => {// 登陆成功
          this.setState({
            errors: {},
            isLoading: false
          })
          this.props.history.push('/')
          this.props.actions.addFlashMsg({
            text: '登陆成功!',
            type: 'success'
          })
        }, ({ response }) => {// 登录失败
          this.setState({
            errors: response.data.errors,
            isLoading: false
          })
        })
    } else {// 如果用户名或密码没有输入
      this.setState({
        errors: {
          password: '请输入用户名或密码!'
        }
      })
    }
  }
  handleChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }
  render() {
    const { username, password, errors, isLoading } = this.state
    return (
      <div>
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <h1>Login</h1>
          <form onSubmit={this.handleLogin}>
            <div className="form-group">
              <label htmlFor="username">username</label>
              <input
                type="text"
                className='form-control'
                name="username"
                value={username}
                onChange={this.handleChange}
                id="username" />
              {errors.username && <p>{errors.username}</p>}
              {/* 如果错误存在就显示 p 标签 */}
            </div>
            <div className="form-group">
              <label htmlFor="password">password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={password}
                onChange={this.handleChange}
                id="password" />
              {errors.password && <p>{errors.password}</p>}
            </div>
            <div className="form-group">
              <input
                type="submit"
                className="btn btn-primary"
                value="Login"
                disabled={isLoading}
              />
            </div>
          </form>
        </div>
        <div className="col-md-3"></div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => (
  {
    actions: bindActionCreators(actions, dispatch)
  }
)

export default connect(state => state, mapDispatchToProps)(Login)