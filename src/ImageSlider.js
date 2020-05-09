import React, { Component } from 'react';

export default class ImageSlides extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            currentSlideIndex: 0
        }
      }

    //   'I am on slide <CURRENT_SLIDE>', where <CURRENT_SLIDE> is the value of this.state.currentSlideIndex

    render() {
        return (
            <div>
                <h1>I am on slide {this.state.currentSlideIndex}</h1>
            </div>
        )
    }


}