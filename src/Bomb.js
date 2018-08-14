import React, { Component } from 'react';
export default class Bomb extends Component {

    constructor(props) {
        super(props)
        this.state = {
            secondsLeft: this.props.initialCount
        }
    }

    render() {
        // const message = this.state.secondsLeft > 0 ? `${this.state.secondsLeft} seconds left before I go boom!` : 'Boom!'

        // return (
        //     <div>{message}</div>
        // )
        
        if(this.state.secondsLeft > 0){
        return (
            <h1>{this.state.secondsLeft} seconds left before I go boom!</h1>
          )
        } else {
            return (
                <h1>Boom!</h1>
              )
        }
    }

    
}