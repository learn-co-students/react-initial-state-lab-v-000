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
    var {currentSlideIndex} = this.state
    return (
      <div className="image-slider">
        <p>I am on slide {currentSlideIndex}</p>
      </div>
    );
  }
}

export default ImageSlider
