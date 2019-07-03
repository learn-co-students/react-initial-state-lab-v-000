import React, { Component } from 'react';

export default class ImageSlider extends Component {

  constructor() {
    super()
    this.state = {
       currentSlideIndex: 0
    }
  }

  // incrementCount() {
  //   this.setState((state) => {
  //     // Important: read `state` instead of `this.state` when updating.
  //     return {count: state.count + 1}
  //   });
  // }


  render() {
    return(
  'I am on slide {<CURRENT_SLIDE>{this.state.currentSlideIndex}/>} '
  )
  }
}
