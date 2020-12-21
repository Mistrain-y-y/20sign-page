import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions/actions'
import {withRouter} from 'react-router-dom'
import {bindActionCreators} from 'redux'

// 高阶组件, 登录了才能访问组件内容
function requireAuth(ComposeComponent) {
  class Authenticate extends Component {
    componentDidMount() {
      if (!this.props.isAuthenticated) {// 不处于登录状态
        this.props.actions.addFlashMsg({
          type: 'danger',
          text: '您还没有登录, 请登录!'
        })
        this.props.history.push('/login')
      }
    }
    UNSAFE_componentWillUpdate(nextProps) {
      if (!nextProps.isAuthenticated) {
        this.props.history.push('/login')
      }
    }
    render() {
      return (<ComposeComponent {...this.props}/>)
    }
  }

  const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })

  return withRouter(connect(state => state.auth, mapDispatchToProps)(Authenticate))
}

export default requireAuth