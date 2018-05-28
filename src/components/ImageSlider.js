import React from 'react';

class ImageSlider extends React.Component {
    constructor () {
        super ();
        this.state = {
            currentSlideIndex: 0
        }
    };

    render () {
        return (
            <div className='image-slider'>
            <h2>I am on slide {this.state.currentSlideIndex}</h2>
            </div>
        )
    }
};

export default ImageSlider;
