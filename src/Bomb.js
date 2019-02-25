import { Component } from 'react';
import React from 'react';

export default class Bomb extends Component {
  constructor(props) {
    super(props)
    this.state = {
      secondsLeft: this.props.initialCount
    };
  };
  render() {
    const boomOrNoBoom = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;
    return (
        <div>{boomOrNoBoom}</div>
    )
  }
}