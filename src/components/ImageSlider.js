import React from 'react';
import PropTypes from 'prop-types';

class ImageSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSlideIndex: 0
    }
  }
  render() {
    return (
      <div className="image-slider">
        <p>I am on slide {this.state.currentSlideIndex}</p>
      </div>
    )
  }
}

export default ImageSlider;
