import React, { Component } from 'react';

export default class ImageSlider extends Component {
  constructor(props){
    super(props);

    this.state = {
      currentSlideIndex: 0,
      maxSlideIndex: 5
    }

    this.incrementSlider = this.incrementSlider.bind(this);
  }

  incrementSlider() {
    const {currentSlideIndex, maxSlideIndex} = this.state;

    if(currentSlideIndex < maxSlideIndex){
      this.setState({ currentSlideIndex: currentSlideIndex + 1 })
    } else {
      this.setState({ currentSlideIndex: 0 });
    }
  }

  render() {
    return (
      <p onClick={this.incrementSlider}>I am on slide {this.state.currentSlideIndex}</p>
    )
  }
}
