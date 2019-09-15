// your Bomb code here!
import React, { Component } from 'react';


export default class Bomb extends React.Component {

	constructor(props) {
    super(props)
    this.state = {
      secondsLeft: this.props.initialCount
    }
  }
 

    timesUp = () => { 
    this.setState({
      secondsLeft: 0
    })
   } 

	render() {
	 if(this.state.secondsLeft === 0) {
      return (
         <div>
          Boom!
        </div>
      );
  } else {
  	  return (
  	<div>{this.state.secondsLeft} seconds left before I go boom!</div>
  );}
	}
}