// your ImageSlider code here!
import React, { Component } from 'react'

export default class Bomb extends Component {
  constructor() {
   super()
   this.state = {
     currentSlideIndex: 0
   }
 }

 increment = () => {
    const newIndex = this.state.currentSlideIndex + 1
    this.setState({
      currentSlideIndex: newIndex
    })
  }

  render() {
    return(
      <h3>I am on slide {this.state.currentSlideIndex}</h3>
    )
  }
}
