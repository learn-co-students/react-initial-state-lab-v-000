// Bomb Component Code Goes Here
import React from 'react';

class Bomb extends React.Component {
  constructor(props) {
    super(props);

    this.state = { secondsLeft: props.initialCount };
  }

  render() {
    const msg = this.state.secondsLeft !== 0 ?
      `${this.state.secondsLeft} seconds left before I go boom!` : 'Boom!'

    return (
      <div>
        <p>{ msg }</p>
      </div>
    );
  }
}

export default Bomb;
