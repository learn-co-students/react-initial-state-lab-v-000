// your ImageSlider code here!
import React, { Component } from 'react';

export default class ImageSlider extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentSlideIndex: 0 
    }
  }

  render() {
    I am on {{this.state.currentSlideIndex}}
  }
}


// In the src/ImageSlider.js file, create an ImageSlider React component.
// Its initial state should have a property called currentSlideIndex that starts at 0.
// It should only render out the text 'I am on slide <CURRENT_SLIDE>', where <CURRENT_SLIDE> is the value of this.state.currentSlideIndex.
