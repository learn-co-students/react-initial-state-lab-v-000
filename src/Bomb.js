import React, { Component } from "react";

export default class Bomb extends Component {
  constructor(props) {
    super();
    this.state = { secondsLeft: props.initialCount };
  }

  stateText() {
    return this.state.secondsLeft
      ? `${this.state.secondsLeft} seconds left before I go boom!`
      : "Boom!";
  }

  render() {
    return <div>{this.stateText()}</div>;
  }
}
