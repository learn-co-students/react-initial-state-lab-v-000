import React, { Component } from 'react';

class Bomb extends React.Component {

  constructor(props) {
    super()
    this.state = {secondsLeft: props.initialCount}
  }

  render() {
   let seconds = this.state.secondsLeft

    if (seconds === 0) {
      return <div>Boom!</div>
    } else {
    return <div>{seconds} seconds left before I go boom!</div>
    }

 }
}
export default Bomb;
