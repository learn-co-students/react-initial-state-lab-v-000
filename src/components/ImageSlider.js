// ImageSlider Component Code Goes Here
import React from 'react';

class ImageSlider extends React.Component {
  constructor() { //~initializer
    // In ES6, derived classes have to call super() if they have a constructor.
    // In react, all components extend from the Component class.
    super();
    //as it initializes, you can set its initial state
    this.state = {
      currentSlideIndex: 0
    }
  }

  render() {
    return (
      <h1>I am on slide ${this.state.currentSlideIndex}</h1>
    )
  }
}

export default ImageSlider;
