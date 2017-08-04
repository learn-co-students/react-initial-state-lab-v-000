import React from 'react';

class ImageSlide extends React.Component { 
  constructor() {
    super();
 
    this.state = {
      currentSlideIndex: 0
    }
  }
 
  render() {
    return (
      <div>
        I am on slide {this.state.currentSlideIndex}
      </div>
    )
  }
}


 
export default ImageSlide; 