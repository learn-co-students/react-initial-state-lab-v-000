// Bomb Component Code Goes Here
// Bomb Component Code Goes Here
import React from 'react';

class Bomb extends React.Component {
  constructor(props) {
    super();

    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render() {
    const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;

       return (
         <div>{message}</div>
    );
  }
}


export default Bomb;

//The initial value of secondsLeft is set by passing in an initialCount prop to
// the Bomb component. Don't forget to pass the argument props into the constructor
// (i.e., constructor(props)).
// It should render the text '<SECONDS_LEFT> seconds left before I go boom!', where
// <SECONDS_LEFT> is the value of secondsLeft.
// If secondsLeft equals 0, it should render 'Boom!' instead.
