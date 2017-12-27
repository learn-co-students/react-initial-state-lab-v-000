// Bomb Component Code Goes Here
import React from 'react'

class Bomb extends React.Component{
  constructor(props){
    super();
    this.state = {
      secondsLeft: props.initialCount
    }
  }



  render(){
    let secondsLeft = this.state.secondsLeft;
    const boomMessage = secondsLeft ? secondsLeft + " seconds left before I go boom!" : "Boom!";

    return <p>{boomMessage}</p>
  }
}

export default Bomb
