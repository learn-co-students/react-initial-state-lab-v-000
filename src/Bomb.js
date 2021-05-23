// your Bomb code here!
import React, {Component} from 'react'

class Bomb extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      secondsLeft: props.initialCount
    }
  }
  render(){
    const answer = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;
    return (
      <div className="bomb">
        {answer}
      </div>
    );
  }
}
export default Bomb
