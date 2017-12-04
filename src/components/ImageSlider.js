// Bomb Component Code Goes Here
import React from 'react';

class ImageSlider extends React.Component {
  // constructor() {
  //   super();
  //
  //   this.state = {
  //     currentSlideIndex: 0
  //   }
  // }

  state = { currentSlideIndex: 0 }
  // can be written like this but must be used in arrow function

  render() {
    return (
      <h1>I am on slide {this.state.currentSlideIndex}</h1>
    )
  }
}

export default ImageSlider;
