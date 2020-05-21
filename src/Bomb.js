// your Bomb code here!

import React, { Component } from 'react';

export default class Bomb extends Component {

  constructor(props) {
    super()
    this.state = {
      secondsLeft: props.initialCount
    }
  }
 
  render() {
    if (this.state.secondsLeft === 0) {
        return (
            <div className='bomb'>
              Boom!
            </div>
          )
      } {
        return (
            <div className='bomb'>
              {this.state.secondsLeft} seconds left before I go boom!
            </div>
          )
      }
  }
}
