// your Bomb code here!
import React from 'react'

class Bomb extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			secondsLeft:props.initialCount,
		};

	}

	render() {
		const sec = this.state.secondsLeft
		const text = sec === 0 ? 'Boom!' : `${sec} seconds left before I go boom!`;
		return (
			<div>
			{text}
			</div>
			)
	}
}

export default Bomb;