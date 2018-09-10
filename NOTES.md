Stuff I made in ImageSlider

changeSlideIndex = () => {
  this.setState({
    currentSlideIndex: this.state.currentSlideIndex + 1
  })
}

render() {
  <div onClick={this.changeSlideIndex}>
  return ({`I am on slide ${this.state.currentSlideIndex}`})
  </div>
}
}
