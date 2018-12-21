import React from 'react'

class ImageSlider extends React.Component {
  constructor() {
    super()
    this.state = {
      currentSlideIndex: 0 //initial state should have property called currentSlideIndex starting at 0
    }
  }
  render() {
    return (
      <p>I am on slide {this.state.currentSlideIndex}</p>
      //only render this text where current lide is value of this.state.currentSlideIndex
    )
  }
}

export default ImageSlider
