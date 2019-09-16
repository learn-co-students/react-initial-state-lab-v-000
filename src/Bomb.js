
import React, { Component } from "react";

export default class Bomb extends Component {
  state = {
    secondsLeft: this.props.initialCount
  }; //only using props to set initial state, just tried out w/o constructor

  //return goes at beg of ternary statement
  //make sure to access this.state, not props
  render() {
    return this.state.secondsLeft === 0
      ? "Boom!"
      : `${this.state.secondsLeft} seconds left before I go boom!`;
  }
}
