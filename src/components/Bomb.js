// Bomb Component Code Goes Here
import React from 'react';
import ReactDOM from 'react-dom';

export default class Bomb extends React.Component{

  constructor(props) {
    super(props);
      this.state = {
        secondsLeft: Number(`${props.initialCount}`)
      }
  }
  bombFunction(secondsLeft) {
    if(this.state.secondsLeft > 0) {
      return <div>
      {this.state.secondsLeft} seconds left before I go boom!
      </div>
    }
      return <div>
      Boom!
      </div>
  }
  render() {
    return (
      this.bombFunction(this.secondsLeft)
    )
  }
}
