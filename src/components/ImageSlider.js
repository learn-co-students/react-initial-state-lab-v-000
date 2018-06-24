// Bomb Component Code Goes Here
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class ImageSlider extends React.Component {
  constructor() {
    super()
    this.state = {
      currentSlideIndex: 0
    }
  }
  render () {
    return (
      <div className="image-slider">
        <p>I am on slide {this.state.currentSlideIndex}</p>
      </div>
    )
  }
}

ImageSlider.defaultProps = {
  current_slide_index: 0
}
