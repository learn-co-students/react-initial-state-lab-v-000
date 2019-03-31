// your ImageSlider code here!
import React, { Component } from 'react';



export default class ImageSlider extends Component{
    constructor(){
      super()
      this.state = {
        currentSlideIndex: 0
      }
    }
    // handleClick = () => {
    //   const newSlideIndex = this.state.currentSlideIndex + 1;
    //   this.setSate({
    //     currentSlideIndex: newSlideIndex
    //   })
    // }
  render(){
    return(
    <div>
      I am on slide {this.state.currentSlideIndex}
    </div>
  )}
}
