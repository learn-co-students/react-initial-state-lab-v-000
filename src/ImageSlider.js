// your ImageSlider code here!
import React from 'react';

export default class ImageSlider extends React.Component{
  render(){
    return(
      <div class="image-slider">I am on slide {this.state.currentSlideIndex}</div>
    )
  }
    constructor(){
      super()
      this.state = {
        currentSlideIndex : 0
      }
    }
  }
