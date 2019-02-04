import React, { Component } from "react";

export default class Bomb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsLeft: this.props.initialCount
    };
  }

  render() {
    const seconds_left = this.state.secondsLeft;
    return (
      <div>
        {seconds_left !== 0
          ? `${seconds_left} seconds left before I go boom!`
          : `Boom!`}
      </div>
    );
  }
}
