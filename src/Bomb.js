// your Bomb code here!
import React, { Component } from 'react';

export default class Bomb extends Component {
  
  // Note : Need to pass in "props" to make it available
  constructor(props) {
    // Note : Need to include "super" to make "this" available
    super(props)
    
    // Note : Set the initial state
    this.state = {
      secondsLeft: this.props.initialCount 
    }
  }
  
  // Function to render the correct bomb text
  checkSeconds = () => {
      if (this.state.secondsLeft > 0) {
          return this.state.secondsLeft + ' seconds left before I go boom!'
      } else {
          return 'Boom!'
      }
  }

  render() {
    return (
      <div className="bomb" 
        >{this.checkSeconds()}
      </div>
    )
  }
  
}