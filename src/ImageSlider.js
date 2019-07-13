// your ImageSlider code here!
import React, { Component } from 'react';

class ImageSlider extends Component {

  constructor () {
    super() 
    this.state = {
      currentSlideIndex: 0
    }
  }


  render () {
    return (
      <div>
        <h3>I am on slide {this.state.currentSlideIndex}</h3>
      </div>
    )
  }
}

export default ImageSlider;