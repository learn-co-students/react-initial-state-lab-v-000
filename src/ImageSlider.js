// your ImageSlider code here!
import React, { Component } from 'react';

export default class ImageSlider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentSlideIndex: 0
        } 
    }

    render () {
        return (
            <span>I am on slide {this.state.currentSlideIndex}</span>
        )
    }
}

ImageSlider.defaultProps = {
    currentSlideIndex: 0
}