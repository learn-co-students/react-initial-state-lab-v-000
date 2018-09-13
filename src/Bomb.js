import React, { Component } from 'react';

export default class Bomb extends Component {
  constructor(props) {
    super(props)
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  boom = () => {
    let seconds = this.state.secondsLeft
    if (this.state.secondsLeft === 0) {
      return ('Boom!')
    } else {
      return ( `${seconds} seconds left before I go boom!`)
    }
  }

  render(){
    return(
      <div>{this.boom()}</div>
    )
  }
}
