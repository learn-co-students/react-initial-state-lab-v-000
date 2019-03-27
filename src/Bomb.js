import React, { Component } from 'react';

export default class Bomb extends Component {

	constructor(prop) {
	  super(prop)
	  this.state = {
	  	secondsLeft: prop.initialCount
	  }
	}

	render() {
		const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;

		// let message = ""
     	// if (this.state.secondsLeft === 0) {
		// 	message = "Boom!"
		// } else {
		// 	message = `${this.state.secondsLeft} seconds left before I go boom!`
		// }

	    return (
	    	<div>{message}</div>
	    )
	}
}

