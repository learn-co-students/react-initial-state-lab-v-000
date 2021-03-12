// your Bomb code here!

import React from 'react';

class Bomb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render() {
    return (
      <div>{this.state.secondsLeft !== 0 ? this.state.secondsLeft + " seconds left before I go boom!" : "Boom!"}</div>
    );
  };
}

//   render() {
//     const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;
//
//     return (
//       <div>{message}</div>
//     )
//   }
// }

export default Bomb
