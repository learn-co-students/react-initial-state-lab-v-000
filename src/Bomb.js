import React, { Component } from 'react';

export default class Bomb extends Component {

    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    render() {
        console.log(this.state.secondsLeft)
        if (this.state.secondsLeft === 0) {
            return `Boom!`
        } else {
            return `${this.state.secondsLeft} seconds left before I go boom!`
        }

    }
}