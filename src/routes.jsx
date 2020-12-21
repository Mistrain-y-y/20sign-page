// 路由页面
import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import SignUp from './components/signUp/signUp'
import Home from './components/home/home'
import Login from './components/login/login'
import Shop from './components/shop/shop'
import requireAuth from './utils/requireAuth'

export default class Routes extends Component {
  render() {
    return (
      <div className="container">
        <Route path="/" exact component={Home}/>
        <Route path="/signup" exact component={SignUp}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/shop" exact component={requireAuth(Shop)}/>
      </div>
    )
  }
}