import React, { Component } from 'react'

export default class Bomb extends Component {

	constructor(props) {
		super()
		this.state = {
			secondsLeft: props.initialCount
		}
	}

	decrementTimer = () => {
			this.setState({
				secondsLeft: this.state.secondsLeft - 1
		})
	}

  render () {
			
		const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`

		return (
			<div onClick={this.decrementTimer}>
				{ message }
			</div>
		)
	}

}