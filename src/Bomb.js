import React, { Component } from 'react';

export default class Bomb extends Component {
  constructor(props) {
    super(props)
    this.state = {
      secondsLeft: props.initialCount
    }
  }



  render() {
    const timeLeft = this.state.secondsLeft;
    let message;
    if (timeLeft === 0) {
      message = 'Boom!'
    } else {
      message = `${timeLeft} seconds left before I go boom!`
    }


    return (
      <h1>{message}</h1>
    )
  }

}
