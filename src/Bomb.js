// your Bomb code here!
import React from 'react';

class Bomb extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      secondsLeft: this.props.initialCount
    }
  }

  render(){
    if(this.state.secondsLeft > 0){
      return <span>{this.state.secondsLeft} seconds left before I go boom!</span>
    } else if(this.state.secondsLeft === 0) {
      return <span>Boom!</span>
    }
  }
}

export default Bomb
