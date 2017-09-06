// Bomb Component Code Goes Here
import React from 'react';

class Bomb extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render() {
    var kaboom = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`
    return (
      <p className="bomb">
        {kaboom}
      </p>
    )
  }
}

export default Bomb;
