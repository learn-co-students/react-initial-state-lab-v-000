// Bomb Component Code Goes Here
import React from 'react';


export default class Bomb extends React.Component{

  constructor(timer){
    super();
    console.log(timer)
    this.state = {
      secondsLeft: timer.initialCount
    }
  }

  render(){
    let message;

      if (this.state.secondsLeft !== 0){
        message = this.state.secondsLeft + " seconds left before I go boom!"
      }else{
        message= "Boom!"
      }
    return(
      <div>
      <h3>{message}</h3>
      </div>
    )
  }

  }
