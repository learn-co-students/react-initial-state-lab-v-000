import React, { Component } from 'react';

export default class Bomb extends Component {
    
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }
      
    // '<SECONDS_LEFT> seconds left before I go boom!', where <SECONDS_LEFT> is the value of secondsLeft

    render(){
        const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;
      
        return (
          <div>{message}</div>
        )
      }
}