// your ImageSlider code here!
import React from 'react';

export default class ImageSlider extends React.Component {
//
  constructor() {
    super()

//set the initial state
    this.state = {
      //give it properties
      currentSlideIndex: 0
    }
  }
// render html in the virtual DOM
  render() {
    //Use 'return ()' to display variables and html elements.
    return (
      <h1>I am on slide {this.state.currentSlideIndex}</h1>
    )
  }
}
