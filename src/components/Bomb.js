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
      const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;

    return (
      <div>{message}</div>
      // This is what I had.  Not clear given lessons so far how FI got to the above.
      // <div>
      //   {this.state.secondsLeft} seconds left before I go boom!
      // </div>
    );
  }
}

export default Bomb;
