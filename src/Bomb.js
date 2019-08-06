// your Bomb code here!
import React, {Component} from 'react' 

class Bomb extends Component{

	constructor(props){
		super(props);
		this.state = {
			secondsLeft: this.props.initialCount
		};
	}

	render(){
		const seconds_message = `${this.state.secondsLeft} seconds left before I go boom!`;
		const go_boom = this.state.secondsLeft <=  0 
		const message = go_boom ? "Boom!" : seconds_message; 
		return <p>{message}</p> 
	}
}

export default Bomb; 
