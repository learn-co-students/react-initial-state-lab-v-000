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
				secondsLeft: this.state.initialCount - 1
		})
	}

  render () {
			
		const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`

		return (
			<div>
				{ message }
			</div>




			// <div onClick={this.decrementTimer}>
			// 	`${this.state.secondsLeft} seconds left before I go boom!`
			// </div>
			 


			// 'hello'

			// if ( this.state.initialCount > 0 ) {
			// `${this.state.decrementTimer} seconds before I go boom!`
			// } else {
			// 	'Boom!'
			// }
		)
	}

}