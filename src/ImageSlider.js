// your ImageSlider code here!
import React, { Component } from 'react';

export default class ImageSlider extends Component {
  
  constructor() {
    super()
    
    // Note : Set the initial state
    this.state = {
      currentSlideIndex: 0 
    }
  }

  render() {
    return (
      <div className="imageslider" 
        >I am on slide {this.state.currentSlideIndex}
      </div>
    )
  }
  
}