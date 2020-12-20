import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

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
    // 可以通过父组件传递 history, 或者包裹高阶函数 withRouter
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
          // 注册成功的时候发送提示信息的 action
          this.props.actions.addFlashMsg({
            type: 'success',
            text: '注册成功, 请登录!'
          })

          this.props.history.replace('/login')// 跳转页面
        }
      }, ({ response }) => {// 后台验证失败
        this.setState({
          errors: response.data,
          isLoading: false
        })
      })
  }
  handleChange = async e => {
    const { name, value } = e.target
    await this.setState({
      // 等待 setState 完成后再执行下面的操作, 修复 bug
      // 如果不加 await, 总是先执行 this.checkUsername 再 setState
      [name]: value
    })
    if (name === 'username') {
      this.checkUsername()// 触发 onChange 事件后, 
    }
  }
  checkUsername = () => {
    const {username} = this.state
    if (username.trim()) {// 输入了用户名就进行验证
      this.setState({
        // 修复 bug, 用户名验证需要一段时间, 验证的这段时间不可以注册
        isLoading: true
      })
      this.props.actions.checkUsername(username.trim())
      .then(res => {
        if (res.data.success) {
          this.setState({
            isLoading: false,
            errors: {}
          })
        }
      }, ({response}) => {
        this.setState({
          errors: response.data,
          isLoading: true
        })
      })
    }
  }
  componentDidMount(){
    // 为修复 chrome 自动填写不触发验证的 bug, 
    // 组件一挂载就验证用户名是否已存在, 避免注册了重复的用户名
    this.checkUsername()
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