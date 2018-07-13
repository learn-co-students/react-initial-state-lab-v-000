import React from 'react';

class Bomb extends React.Component {
	constructor(props) {
		super();

		this.state = {
			secondsLeft: props.initialCount
		}
	}

	render () {
		const SECONDS_LEFT = this.state.secondsLeft

		if (SECONDS_LEFT === 0) {
			return <div>Boom!</div>
		}

		return(
		<div>
			<p>{SECONDS_LEFT} seconds left before I go boom!</p>
		</div>
		)
	}

}

export default Bomb;
