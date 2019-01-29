// your ImageSlider code here!
import React, { Component } from 'react';

class ImageSlider extends Component {
    constructor() {
        super()
        console.log()
        this.state = {
            currentSlideIndex: 0
        }
        console.log(this.state)
    }

    render() {
        return (
            `I am on slide ${this.state.currentSlideIndex}` 
        )
    }
}


export default ImageSlider