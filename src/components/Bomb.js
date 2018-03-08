// Bomb Component Code Goes Here
import React from 'react';

class Bomb extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      secondsLeft: props.initialCount
    }
  }
  render () {

    return (
      <h2>{this.state.secondsLeft > 0 ? `${this.state.secondsLeft} seconds left before I go boom!` : "Boom!"}</h2>
    )
  }
}

export default Bomb;
