import React from 'react';

export default class Bomb extends React.Component {
  constructor(props) {
    super();
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render() {
    var tickTock;

    if (this.state.secondsLeft > 0) {
      tickTock = this.state.secondsLeft + " seconds left before I go boom!";
    } else {
      tickTock = "Boom!"
    }
    return (
      <p>{tickTock}</p>
    )

  }
}
