// Bomb Component Code Goes Here

import React, { Component } from 'react'


class Bomb extends Component {
  constructor(props) {
    super(props)
    this.state = {
      secondsLeft: this.props.initialCount,
    }
  }

  render() {
    const GoesBoom=this.state.secondsLeft === 0 ? "Boom!" : `${this.state.secondsLeft} seconds left before I go boom!`;

    return (
      <div>
      {GoesBoom}
      </div>
    )
  }
}

export default Bomb
