// 路由页面
import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import SignUp from './components/signUp/signUp'
import Home from './components/home/home'

export default class Routes extends Component {
  render() {
    return (
      <div className="container">
        <Route path="/" exact component={Home}/>
        <Route path="/signup" exact component={SignUp}/>
      </div>
    )
  }
}