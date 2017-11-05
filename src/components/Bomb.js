import React, { Component } from 'react';
import ReactDOM from 'react-dom';
 
export default class Bomb extends Component {
  constructor(props){
    super()
    this.state = {
      secondsLeft: props.initialCount
    }
  }
  
  render(){
    let msg = 'hi there'
    if(this.state.secondsLeft > 0){
      msg = `${this.state.secondsLeft} seconds left before I go boom!` 
    } else {
      msg = 'Boom!'
    }
    return(
      <div>
        {msg}
      </div>
    )  
  }
};
