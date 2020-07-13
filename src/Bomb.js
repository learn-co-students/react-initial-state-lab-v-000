// your Bomb code here!
// import React from 'react';
import React, { Component } from 'react';


export default class Bomb extends Component {
  constructor(props) {
    super()
    this.state = {
      secondsLeft: props.initialCount
    }
  }


  render() {
    // let message;
    // console.log("message", message)
    // console.log("secondsLeft", this.state.secondsLeft)
    //
    // if (this.state.secondsLeft == 0) {
    //   let message = 'Boom!'
    //   console.log("message2", message)
    // } else {
    //   console.log(message)
    //
    //   let message = '120 left before I go boom!'
    // }

    return (
      <div>
        { this.state.secondsLeft == 0 ? 'Boom!' : '120 seconds left before I go boom!' }
      </div>
    )
  }
}
