// your ImageSlider code here!
import React from 'react';
// import React, { Component } from 'react';


export default class ImageSlider extends React.Component {

  constructor() {
    super()
    this.state = {currentSlideIndex: 0}
  }


  render() {
    return (
      // console.log(this.state.currentSlideIndex)
      <div>I am on slide { this.state.currentSlideIndex }</div>
    )
  }
};
