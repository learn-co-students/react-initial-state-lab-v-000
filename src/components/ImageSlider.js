import React from 'react';

export default class ImageSlider extends React.Component {
  constructor() {
    super();

    this.state = {
      currentSlideIndex: 0
    }
  }

  render() {
    return (
      <p>I am on slide {this.state.currentSlideIndex}</p>
    )
  }
}





// 1. In the `components/ImageSlider.js` file, create an `ImageSlider` React component.
// 2. Its initial state should have a property called `currentSlideIndex` that starts at `0`.
// 3. It should only render out the text `'I am on slide <CURRENT_SLIDE>'`, where `<CURRENT_SLIDE>` is the value of `this.state.currentSlideIndex`.// Bomb Component Code Goes Here
