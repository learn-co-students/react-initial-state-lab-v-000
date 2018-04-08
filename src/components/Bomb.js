// Bomb Component Code Goes Here
<<<<<<< HEAD
=======

>>>>>>> f98d19685c3c015a8850fb8ddcca2ebd71638e39
import React from 'react';

export default class Bomb extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
<<<<<<< HEAD
			secondsLeft: props.initialCount
=======
			secondsLeft: props.initialCount 
>>>>>>> f98d19685c3c015a8850fb8ddcca2ebd71638e39
		}
	}

	render() {
		const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;
		return (
			<div>{message}</div>
		)
	}
<<<<<<< HEAD
}
=======
}
>>>>>>> f98d19685c3c015a8850fb8ddcca2ebd71638e39
