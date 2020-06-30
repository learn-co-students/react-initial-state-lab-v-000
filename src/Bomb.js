// Goal: Create a component that represents a bomb timer that counts down until it reaches 0. 
// However, the only thing we're going to focus on right now is setting the initial state of the bomb: 
// the amount of seconds left on the timer. Since bomb timers can differ, we'll pass in a prop to our 
// Bomb component to determine what the starting count should be.

// The initial state of Bomb has a property called "secondsLeft".
// The initial value of "secondsLeft" should be equal to the "initialCount" prop of our Bomb component.

// Learn how to set an initial state based off that component's props. 
// React passes a component's props as an argument into the constructor (i.e., constructor(props)). 
// Remember to call super() on the first line of the constructor (this is required in React 
// components if we are to use this in the constructor). 

// Tests Passing:

// Bomb:
// ✓ should set the `secondsLeft` to the value of the `initialCount` prop
// ✓ render the correct text when the timer is not 0
// ✓ render the correct text when the timer is 0 

import React from 'react';

class Bomb extends React.Component {

  constructor(props) {
    super() 

    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render() {
    const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;

    return (
      <div>{message}</div>
    )
  }
}

export default Bomb;
