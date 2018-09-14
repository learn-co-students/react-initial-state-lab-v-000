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
      <div className="imageSlider">
        I am on slide {this.state.currentSlideIndex}
      </div>
    );
  }
}

export default ImageSlider;
