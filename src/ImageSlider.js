import React, {Component} from 'react'

export default class ImageSlider extends Component {
  constructor() {
    super()
    this.state = {
      currentSliderIndex: 0
    }
  }

  render() {
    return (
      <h1>I on slide {this.state.currentSliderIndex}</h1>)
    )
  }
}
