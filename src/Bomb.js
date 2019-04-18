// your Bomb code here!
import React from 'react';

export default class Bomb extends React.Component{
  render() {
    const message = this.state.secondsLeft ? `${this.state.secondsLeft} seconds left before I go boom!` : 'Boom!'
    return (
      <div>{message}</div>
   )
 }
    constructor(props) {
      super(props)
      this.state = {
        secondsLeft : props.initialCount
      }
    }
}
