import React, { Component } from 'react'
import { withRouter} from 'react-router-dom'

class SignUpForm extends Component {
  state = {
    username: '',
    password: '',
    errors: {},
    isLoading: false
  }
  handleSubmit = e => {
    console.log(this.props)
    // 可以看到 props 里面没有 history, 因为当前组件没有直接被 Router 管理
    // 可以通过父组件传递 history, 或者包裹 withRouter
    e.preventDefault()
    this.setState({
      isLoading: true
    })
    const { username, password } = this.state
    this.props.actions.signUpRequest({ username, password })
      .then(res => {
        if (res.data.success) {// 如果后台验证成功
          this.setState({
            errors: res.data.errors,
            isLoading: false
          })
          this.props.history.replace('/')// 跳转页面
        }
      }, ({ response }) => {// 后台验证失败
        this.setState({
          errors: response.data,
          isLoading: false
        })
      })
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
          <h1>Sign In Page</h1>
          <form onSubmit={this.handleSubmit}>
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
                type="text"
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
                value="submit"
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

export default withRouter(SignUpForm)