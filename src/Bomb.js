import React, { Component } from 'react';
export default class Bomb extends Component {
  constructor(props) {
    super(props)
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render() {
    let string = '';
    if (this.state.secondsLeft === 0) {
      string = 'Boom!'
    } else {
      string = this.state.secondsLeft + ' seconds left before I go boom!'
    }
    return (string)
  }
}
