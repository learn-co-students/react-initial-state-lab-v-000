import React, { Component } from "react";

export default class Bomb extends Component {
  constructor(props) {
    super();
    this.state = {
      secondsLeft: props.initialCount
    };
  }
  render() {
    let remainingSeconds = this.state.secondsLeft;
    return (
      <div>
        {remainingSeconds > 0
          ? `${remainingSeconds} seconds left before I go boom!`
          : "Boom!"}
      </div>
    );
  }
}
