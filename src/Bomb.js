import React, { Component } from "react";

export default class Bomb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsLeft: this.props.initialCount
    };
  }

  render() {
    const bombMessage =
      this.stat.secondsLeft === 0
        ? "Boom!"
        : "{secondsLeft} seconds left before I go boom!";
    return (
      <div>
        <p>{bombMessage}</p>
      </div>
    );
  }
}
