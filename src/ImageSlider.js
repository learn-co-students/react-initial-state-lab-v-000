import React, { Component } from 'react';

export default class ImageSlider extends React.Component {
    constructor() {
        super()
        this.state = {
            currentSlideIndex: 0
        }
    }

    render() {
        const CURRENT_SLIDE = this.state.currentSlideIndex
        const text = `I am on slide ${CURRENT_SLIDE}`
        return(
            <div>
                <p>{text}</p>
            </div>
        )
    }



}