import React, { Component } from 'react';

export default class Bomb extends Component {

  constructor(props) {
    super()
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  decrement = () => {
    let newCount = this.state.secondsLeft;
    setTimeout(() => {
      newCount--;
      this.setState({
        secondsLeft: newCount
      })
    }, 100)
  }

  display = () => {
    if (this.state.secondsLeft > 0) {
      return `${this.state.secondsLeft} seconds left before I go boom!`
    } else {
      return "Boom!"
    }
  }

  render() {
    this.decrement();
    return (
      <div>
        {this.display()}
      </div>
    )
  }
  
}
