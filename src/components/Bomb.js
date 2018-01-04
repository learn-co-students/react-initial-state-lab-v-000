// Bomb Component Code Goes Here
import React from 'react'

export default class Bomb extends React.Component {
  constructor (props) {
    super(props)
    this.state = {secondsLeft: props.initialCount}
    this.message = this.state.secondsLeft !== 0 ? this.state.secondsLeft + ' seconds left before I go boom!' : 'Boom!'
  }

  render () {
    return (
      <div>
        <p>
          {this.message}
        </p>
      </div>
    )
  }
}
