
import React, { Component } from 'react';

export default class ImageSlider extends Component {

    constructor(props){
        super(props)
        this.state={
            currentSlideIndex: 0
        }
    }

    // this.state.currentSlideIndex = this.state.currentSlideIndex.bind(this);

    render(){
        return(
            <div>I am on slide {this.state.currentSlideIndex}</div>
        )
    }
}