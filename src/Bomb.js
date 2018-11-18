// your Bomb code here!
import React, { Component } from 'react';

export default class Bomb extends Component {
    constructor(props){
        super(props)
        this.state = {
            secondsLeft: this.props.initialCount
        }

    }
    render() {
        let string;
        let seconds;
        if (this.state.secondsLeft === 0){
            string = "Boom!"
        } else {
            string = "seconds left before I go boom!";
            seconds = this.state.secondsLeft;
        }
        return (
            <div className='Bomb'>{ seconds } { string }</div>
        )
    }
}
