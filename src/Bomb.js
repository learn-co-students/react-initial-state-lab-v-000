import React, { Component } from 'react';


export default class Bomb extends Component {
    constructor(props){
        super(props)
        this.state = {
            secondsLeft: this.props.initialCount
        }
    }
  
    message = () => {
        let timeLeft = `${this.state.secondsLeft} seconds left before I go boom!`
        let boom = "Boom!"
        return (this.state.secondsLeft > 0) ? timeLeft : boom 
    }
  
  render() {
      return (
        <div>{this.message()}</div>
      )
  }
  
}
