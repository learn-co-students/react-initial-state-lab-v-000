// Bomb Component Code Goes Here
import React from 'react';
 
class ImageSlider extends React.Component { 
  constructor() {
    super();
 
    this.state = {
      currentSlideIndex: 0
    }
  }
 
  render() {
    return (
      <slide className="toggle-slide">
        I am on slide {this.state.currentSlideIndex}
      </slide>
    )
  }
}
 
export default ImageSlider;