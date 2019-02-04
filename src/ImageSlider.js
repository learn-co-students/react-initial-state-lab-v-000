import React, { Component } from "react";

export default class ImageSlider extends Component {
  state = { currentSlideIndex: 0 };

  render() {
    const current_slide = this.state.currentSlideIndex;
    return <div>I am on slide {current_slide}</div>;
  }
}
