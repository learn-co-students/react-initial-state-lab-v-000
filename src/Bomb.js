// your Bomb code here!
import React, { Component } from 'react';
import ImageSlider from './ImageSlider.js'

export default class Bomb extends Component {
  constructor(props) {
    super()
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  generateMsg = () => {
    if (this.state.secondsLeft === 0) {
      return 'Boom!'
    } else {
      return `${this.state.secondsLeft} seconds left before I go boom!`
    }
  }

  render() {
    // const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;

    return (
      <div>
        {/* {message} */}
        {this.generateMsg()}
      </div>
    )
  }
}