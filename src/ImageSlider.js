// your Bomb code here!
import React, { Component } from 'react';
import Bomb from './Bomb.js';



export default class ImageSlider extends Component {

  constructor (props) {
    super()
    this.state = {
      currentSlideIndex: 0
    }
  }

  render() {
    return (
      <div className="">
        I am on slide {this.state.currentSlideIndex}
      </div>
    )
  }
}
