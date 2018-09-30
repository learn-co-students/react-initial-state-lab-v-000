import React, { Component } from 'react';

export default class ImageSlider extends Component {
    constructor() {
        super()
        this.state = {
            currentSlideIndex: 0
        }
    }

    render() {
        return(
            <div>
                CURRENT_SLIDE = this.state.currentSlideIndex
            </div>
        )
    }



}