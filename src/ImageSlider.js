import React from 'react'
import Bomb from './Bomb'
class ImageSlider extends React.Component {

  constructor() {
    super()
    this.state = {
      currentSlideIndex: 0
    }
  }

  render() {

    return (
      'I am on slide ' + this.state.currentSlideIndex
    )

  }

}

export default ImageSlider
