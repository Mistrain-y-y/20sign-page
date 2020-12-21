import React from 'react'
import reactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'

import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import Routes from './routes'
import rootReducer from './reducers/rootReducer'
import Nav from './components/nav/nav'
import FlashLists from './components/flash/flashLists'
import setToken from './utils/setToken'
import {setCurrentUser} from './actions/actions'
import jwtDecode from 'jwt-decode'

// 创建全局管理 store
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)))

if (localStorage.jwtToken) {// localStorage 里存在 token, 就保持登陆状态
  setToken(localStorage.getItem('jwtToken'))
  // 将 localStorage 里面的 token 设置到公共请求头
  store.dispatch(setCurrentUser(jwtDecode(localStorage.getItem('jwtToken'))))
}

reactDOM.render(
  <Provider store={store}>
  <Router>
    <Nav/>
    <FlashLists/>
    <Routes/>
  </Router>
</Provider>, document.getElementById('root'))