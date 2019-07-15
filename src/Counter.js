import React, { Component } from 'react'

class Counter extends Component {
  render () {
    return (
      <div className="counter">
        <h2> você tem {this.props.count * 2} counters.</h2>
      </div>
    )
  }
} 

export default Counter;