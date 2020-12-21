import React, { Component } from 'react'

export default class Home extends Component {
  toMarket = () => {
    this.props.history.push('/shop')
  }
  render() {
    return (
      <div className="jumbotron">
        <h1>hi react redux login</h1>
        <button
        className="btn btn-primary btn-lg"
         onClick={this.toMarket}>To Market!</button>
      </div>
    )
  }
}
