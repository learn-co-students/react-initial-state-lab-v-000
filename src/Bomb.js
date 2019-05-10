import React, { Component } from 'react';

export default class Bomb extends Component {
  constructor(props) {
		super(props)
		this.state = {
			secondsLeft: this.props.initialCount
		}
	}

	bombMessage = () => {
		const secondsLeft = this.state.secondsLeft

		if (secondsLeft > 0) {
			return <div className="bomb">{secondsLeft} seconds left before I go boom!</div> 
		} else {
			return <div className="bomb">Boom!</div>
		}
	}
 
	render() {
		return (
			this.bombMessage()
		)
  }
  }
