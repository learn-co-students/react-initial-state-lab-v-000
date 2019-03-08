import React from 'react';

export default class Bomb extends React.Component {
	constructor(props) {
		super(props);
		this.state = ({secondsLeft: this.props.initialCount});

	}
	render(){
		  let seconds =  this.state.secondsLeft
			let bombString;
			seconds === 0 ? (bombString = 'Boom!') : (bombString = seconds + ' seconds left before I go boom!')

		return(
			<div>
					{bombString}
			</div>
		)
	}
}
