import React, { Component } from 'react';

export default class Bomb extends Component {
  
  constructor(props) {
    super()
      this.state = { 
        secondsLeft: props.initialCount
        }
      }

  seconds = () => {
      const seconds = this.state.secondsLeft
      return (seconds === 0) ? "Boom!" : `${seconds} seconds left before I go boom!`;
  }
  
  render() {
    return (
      <div>
       {this.seconds()}    
      </div>
    )
  }
  
}