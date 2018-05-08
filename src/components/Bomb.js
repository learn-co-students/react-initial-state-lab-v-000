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
    const timeLeft = this.state.secondsLeft;
    return(
      <div>
        {timeLeft === 0 ? 'Boom!' : `${timeLeft} seconds left before I go boom!` }
      </div>
    )
  }
}

export default Bomb;
