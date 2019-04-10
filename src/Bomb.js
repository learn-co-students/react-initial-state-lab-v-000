// your Bomb code here!

import React, { Component } from 'react';

export default class Bomb extends Component {
	constructor(props) {
		super(props)
		this.state = {
			secondsLeft: this.props.initialCount
		}
	}

	bombText = () => {
		let returnValue = 'Boom!'
		if (this.state.secondsLeft > 0) {
			returnValue = this.state.secondsLeft + ' seconds left before I go boom!'
		}

		return returnValue
	}

	render() {
		return (
			<div
				className='bomb'
			>
			{ this.bombText() }
			</div>
		)
	}

}
