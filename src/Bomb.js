import React, { Component } from 'react';

export default class Bomb extends Component {
	
	constructor(props) {
		super(props)
		this.state = {
			secondsLeft: this.props.initialCount
		}
	}


// It should render the text '<SECONDS_LEFT> seconds left before I go boom!', where <SECONDS_LEFT> is the value of secondsLeft.
	render() {
		if (this.state.secondsLeft == 0)
			return (
				<div>
					Boom!
				</div>
			)
		else
			return (
				<div>
				{this.state.secondsLeft} seconds left before I go boom!
				</div>
			)
		end
	}
}