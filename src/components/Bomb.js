// Bomb Component Code Goes Here
import React from 'react';

export default class Bomb extends React.Component {
  constructor(props) {
    super();

    this.state = {
      secondsLeft: props.initialCount
    }
  }
  render() {
    const message = this.state.secondsLeft > 0 ? `${this.state.secondsLeft} seconds left before I go boom!` :'Boom!'
    
    return(     
      <div>{message}</div>
    )
  }
}