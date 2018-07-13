import React from 'react';
import PropTypes from 'prop-types';

class ImageSlider extends React.Component {

	constructor() {
		super();

		this.state = {
			currentSlideIndex: 0
		}
	}

	render () {
		return(
			<div>
				<p>I am on slide {this.props.currentSlideIndex}</p>
			</div>
		)
	}

}

export default ImageSlider;

ImageSlider.defaultProps = {
	currentSlideIndex: 0
}


ImageSlider.propTypes = {
	currentSlideIndex: PropTypes.number
}