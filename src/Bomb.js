import React, { Component } from 'react';

export default class Bomb extends Component {
    constructor(props) {
        super(props)
        this.state = {
            secondsLeft: this.props.initialCount
        }
    }

    render() {
        let timeLeft = this.state.secondsLeft

        if (timeLeft === 0) {
            return ( 
                'Boom!' 
            )
        } else {
            return (    
                `${timeLeft} seconds left before I go boom!`
            )
        }       
    }
}