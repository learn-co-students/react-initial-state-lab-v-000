import React, { Component } from 'react';

export default class ImageSlider extends Component {
    constructor() {
        super()
        this.state = {
            currentSlideIndex: 0
         } // ...define initial state with a key of 'color' set to the 'value' prop
    }

    
  render() {
    return (
      <p>I am on slide {this.state.currentSlideIndex}</p>
    )
  }
}

