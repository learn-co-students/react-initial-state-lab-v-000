// your Bomb code here!
import React, { Component } from 'react';


export default class Bomb extends Component {

  constructor(props) {
    console.log(props)
    super(props)
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  checkState = () => {
    let seconds = this.state.secondsLeft
    console.log(seconds);
    if (seconds !== 0){
      return <div>Hello</div>
    }
    else {
      return <div>Boom!</div>
    }
  }


  render() {
    let seconds = this.state.secondsLeft
      if (seconds !== 0){
        return (<div>{this.state.secondsLeft} seconds left before I go boom!</div>)
      }
      else {
        return (<div>Boom!</div>)
      }
  }

}
