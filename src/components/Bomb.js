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
    if (this.state.secondsLeft > 0) {
      return (
        <div>
        {this.state.secondsLeft} seconds left before I go boom!
        </div>
      );
    } else {
      return (
        <div>
        Boom!
        </div>
      );
    }
  }
}

export default Bomb;

