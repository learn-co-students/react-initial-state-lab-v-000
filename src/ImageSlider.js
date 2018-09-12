// your ImageSlider code here!
import React from 'react'

export default class ImageSlider extends React.Component {
  constructor() {
    super ()
    this.state = {
      currentSlideIndex: 0
    }
  }

  render () {
    const currentSlide = this.state.currentSlideIndex
    let message

    if (currentSlide == 0) {
      message = <p>I am on slide {currentSlide}</p>
    }
    return (
      <div className='imagesSlider'>
        {message}
      </div>
    )
  }
}
