import React from 'react';

class ImageSlider extends React.Component {
  // your ImageSlider code here!
  constructor() {
    super()
    this.state = {
      currentSlideIndex: 0
    }
  }

  render() {
    return (
      <div>I am on slide {this.state.currentSlideIndex}</div>
    )
  }

}

export default ImageSlider;
