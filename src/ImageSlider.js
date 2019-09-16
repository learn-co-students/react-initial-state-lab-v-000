import React, { Component } from "react";

export default class ImageSlider extends Component {
  //b/c imported component, dont need React.Component here
  constructor() {
    super();
    this.state = {
      currentSlideIndex: 0
    };
  }
  render() {
    return `I am on slide ${this.state.currentSlideIndex}`;
  }
}
