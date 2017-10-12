// Bomb Component Code Goes Here
import React from 'react';

class Bomb extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render () {
    if (this.state.secondsLeft < 1) {
      return (
        <div className="the-bomb">
          <p>Boom!</p>
        </div>
      );
    } else {
      return(
        <div className="the-bomb">
          <p>{this.state.secondsLeft} seconds left before I go boom!</p>
        </div>
      );
    }
  }
}

export default Bomb;
