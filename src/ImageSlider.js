import React, { Component } from 'react';


export default class ImageSlider extends React.Component {

  constructor() {
    super()
    this.state = {
      currentSlideIndex: 0
    }
  }

  increment = () => {
    const newSlide = this.state.currentSlideIndex + 1
    this.setState({
      currentSlideIndex: newSlide
    })
  }

    render(){
        return(
        <div onClick={this.increment}>I am on slide {this.state.currentSlideIndex}</div>
        )
    }
}