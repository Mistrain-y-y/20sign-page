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

// 创建全局管理 store
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)))

reactDOM.render(
  <Provider store={store}>
  <Router>
    <Nav/>
    <Routes/>
  </Router>
</Provider>, document.getElementById('root'))