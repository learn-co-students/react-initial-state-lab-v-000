import { Component } from "react";

export default class Bomb extends Component {
  constructor(props) {
    super();
    this.state = {
      secondsLeft: props.initialCount
    };
  }
  render() {
    const { secondsLeft } = this.state;
    return secondsLeft
      ? `${secondsLeft} seconds left before I go boom!`
      : "Boom!";
  }
}
