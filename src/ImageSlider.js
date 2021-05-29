import React from 'react'

class ImageSlider extends React.Component {
      state = {
        currentSlideIndex: 0
    }
    //this sets initial state 

    render(){
        return (
          <div>
            I am on slide {this.state.currentSlideIndex}
          </div>
        )
    }
}


export default ImageSlider