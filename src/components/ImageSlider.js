import React from 'react';

export class ImageSlider extends React.Component {
  constructor() {
    super();

    this.state = {
      currentSlideIndex: 0
    };
  }

  render() {
    return(
      <p className="image-slider">
        I am on slide {this.state.currentSlideIndex}
      </p>
    );
  }
}
