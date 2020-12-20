import React, { Component } from 'react'
import SignUpForm from './signUpForm'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../../actions/actions'

class SignUp extends Component {
  render() {
    return (
      <div>
        <SignUpForm actions={this.props.actions}
        /* 将 actions 传递给表单组件 */
        //  history={this.props.history}{/* 传递给子组件 history */}
         />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(null, mapDispatchToProps)(SignUp)