import React from 'react';

export default class Bomb extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      secondsLeft: this.props.initialCount
    }
  }

  render() {
    const secondsLeft = this.state.secondsLeft
    let message = `${this.state.secondsLeft} seconds left before I go boom!`

    if (secondsLeft === 0) message = `Boom!`

    return (
      <h1>{message}</h1>
    )
  }
}
