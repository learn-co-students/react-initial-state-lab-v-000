// your ImageSlider code here!
import React from 'react';

class ImageSlider extends React.Component {


  constructor() {
    super()
      this.state = {
        currentSlideIndex: 0
      }
  }

  render() {
      return (
        <h1 >
        I am on slide {this.state.currentSlideIndex}
        </h1>
      )
    }

  }


  export default ImageSlider;
  //Its initial state should have a property called currentSlideIndex that starts at 0.
