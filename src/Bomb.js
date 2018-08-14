// your Bomb code here!
import React from 'react';

export default class Bomb extends React.Component {
// pass "props" into the state base constructor only.
  constructor(props) {
    super(props)
// set the property of Bomb's "state"
    this.state = {
      secondsLeft: this.props.initialCount
    }
  }

// render in the Virtual DOM the messages I want.
  render() {
    const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;

    return (
      <div>{message}</div>
    )
  }
}
