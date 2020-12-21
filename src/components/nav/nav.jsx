import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../actions/actions'
import {withRouter} from 'react-router-dom'

class Nav extends Component {
  handleLogOut = () => {
    // 退出登陆, 清除 localStorage 里的数据
    this.props.actions.logOutAction()
  }
  render() {
    const { isAuthenticated } = this.props.auth
    return (
      <div className="navbar navbar-default">
        <NavLink
          style={{
            fontSize: 25,
            marginLeft: 10,
          }}
          className="navbar-text"
          to="/">Home</NavLink>
        <NavLink
          style={{
            fontSize: 25,
            marginLeft: 10,
          }}
          className="navbar-text"
          to="/signup">SignUp</NavLink>
        {isAuthenticated
          ? <button
          onClick={this.handleLogOut}
            className="btn"
            style={{
              fontSize: 20,
              marginLeft: 10,
              marginTop: 11
            }}
          >LogOut</button>
          : <NavLink
            style={{
              fontSize: 25,
              marginLeft: 10
            }}
            className="navbar-text"
            to="/login">Login</NavLink>
        }
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => (
  {actions: bindActionCreators(actions, dispatch)}
)

export default connect(state => state, mapDispatchToProps)(withRouter(Nav))