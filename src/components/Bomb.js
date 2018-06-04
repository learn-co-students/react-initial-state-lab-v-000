// src/components/ToggleButton.js
import React from 'react';

class Bomb extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render() {
    let returnText = ""
    if (this.state.secondsLeft === 0) {
      returnText = "Boom!"
    } else {
      returnText = `${this.state.secondsLeft} seconds left before I go boom!`
    }
    return (
      <div>
      <p>{returnText}</p>
      </div>
    )
  }
}

export default Bomb;// Bomb Component Code Goes Here
