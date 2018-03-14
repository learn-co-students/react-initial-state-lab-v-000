// Bomb Component Code Goes Here
import React from 'react';

class Bomb extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      secondsLeft: this.props.initialCount
    }
  }

  render() {
    var text = this.state.secondsLeft ? `${this.state.secondsLeft} seconds left before I go boom!` : `Boom!` ;
    return (
      <div>
      {text}
      </div>
    )
  }
}

export default Bomb;
