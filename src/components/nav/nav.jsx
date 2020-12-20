import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return (
      <div className="navbar navbar-default">
        <NavLink
          style={{
            fontSize: 25,
            marginLeft: 10
          }}
          className="navbar-text"
          to="/">Home</NavLink>
        <NavLink
          style={{
            fontSize: 25,
            marginLeft: 10
          }}
          className="navbar-text"
          to="/signup">SignUp</NavLink>
        <NavLink
          style={{
            fontSize: 25,
            marginLeft: 10
          }}
          className="navbar-text"
          to="/login">Login</NavLink>
      </div>
    )
  }
}