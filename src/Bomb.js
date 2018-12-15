import React from 'react'


export default class Bomb extends React.Component {
	constructor(props) {
	    super(props);
	 
	    this.state = {
	      secondsLeft: props.initialCount
	    }
	  }

    render() {
	    return (
	    	<div className='seconds-left'>
	      		{this.state.secondsLeft == 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`}
	      	</div>
	    )
	}
}
