import React from 'react';

class Bomb extends React.Component {
	constructor(props) {
		super();

		this.state = {
			secondsLeft: props.initialCount
		}
	}

	render() {
		const {secondsLeft} = this.state;
		const message = secondsLeft ? `${secondsLeft} seconds left before I go boom!` : 'Boom!';

		return (
			<span>{message}</span>
		)
	}
}

export default Bomb;