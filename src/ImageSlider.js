import { Component } from "react";

export default class ImageSlider extends Component {
  constructor(props) {
    super();
    this.state = {
      currentSlideIndex: 0
    };
  }
  render() {
    const { currentSlideIndex } = this.state;
    return `I am on slide ${currentSlideIndex}`;
  }
}
