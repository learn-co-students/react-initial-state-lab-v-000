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
        const current_slide = this.state.currentSlideIndex

        return (
        <h1>I am on slide {current_slide}</h1>
        )
    }
}
  
export default ImageSlider;