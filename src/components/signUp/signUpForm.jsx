import React, {Component} from 'react'

export default class SignUpForm extends Component {
  state = {
    username: '',
    password: '',
    errors: {
      username: '',
      password: ''
    }
  }
  handleSubmit = e => {
    e.preventDefault()
  }
  handleChange = e => {
    const {name, value} = e.target
    this.setState({
      [name]: value
    })
  }
  render() {
    const {username, password, errors} = this.state
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
                id="username"/> {errors.username && <p>{errors.username}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="password">password</label>
              <input
                type="text"
                className="form-control"
                name="password"
                value={password}
                onChange={this.handleChange}
                id="password"/> {errors.password && <p>{errors.password}</p>}
            </div>
            <div className="form-group">
              <input type="submit" className="btn btn-primary" value="submit"/>
            </div>
          </form>
        </div>
        <div className="col-md-3"></div>
      </div>
    )
  }
}