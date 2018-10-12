// your ImageSlider code here!
import React from 'react';
import PropTypes from 'prop-types';

class ImageSlider extends React.Component{
    constructor(props) {
        super(props);
     
        this.state = {
            currentSlideIndex: 0
        }
      }

    render() {
        

        return (
            <div className="toggle-button">
        I am on slide {this.state.currentSlideIndex}
      </div> 
        )
    }
}

ImageSlider.defaultProps = {
    currentSlideIndex: 0
}

ImageSlider.prototypes ={
    currentSlideIndex: PropTypes.number
}

export default ImageSlider;