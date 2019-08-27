// your Bomb code here!
import React, { Component } from 'react';
import ImageSlider from './ImageSlider.js';



export default class Bomb extends Component {

  constructor(props) {
    super(props)
    this.state = {
      secondsLeft: this.props.initialCount
    }
  }

  textChooser = (t) => {
    if (t === 0) {
      return "Boom!"
    } else {
      return `${this.state.secondsLeft} seconds left before I go boom!`
    }
  }

  render() {
    return (
      <div className="">
        {this.textChooser(this.state.secondsLeft)}
      </div>
    )
  }
}
