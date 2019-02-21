import React, { Component } from 'react';

export default class ImageSlider extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentSlideIndex: 0
    }
  }

  render() {
    const currentSlide = this.state.currentSlideIndex
    return (
      <h1>I am on slide {currentSlide}</h1>
    )
  }

}
