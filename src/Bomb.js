import React, { Component } from 'react'

class Bomb extends Component { 
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    render() {
        const NoBoom = () => {
            return <div>{this.state.secondsLeft} seconds left till I go boom!</div>
        }

        const Boom = () => {
            return <div>Boom!</div>
        }

        return(
            this.state.secondsLeft == 0 ? <div>Boom!</div> : <div>{this.state.secondsLeft} seconds left before I go boom!</div>
        )
    }
}

export default Bomb 