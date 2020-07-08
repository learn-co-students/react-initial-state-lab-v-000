// your Bomb code here!

import React, { Component } from 'react';

export default class Bomb extends Component {
  constructor(props) {
    super()
    this.state = {secondsLeft: props.initialCount}
  }

  render() {
    const timeLeft = this.state.secondsLeft;

    return (
      timeLeft > 0 ?
      <div>{timeLeft} seconds left before I go boom!</div> :
      <div>Boom!</div>
    )
  }
}