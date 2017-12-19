import React, { Component } from 'react';

class ImageSlider extends Component {
  state = {
    currentSlideIndex: 0,
  };

  render() {
    const { currentSlideIndex } = this.state;
    return <div>I am on slide {currentSlideIndex}</div>;
  }
}

ImageSlider.propTypes = {};

export default ImageSlider;
