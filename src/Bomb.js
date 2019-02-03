import React, { Component } from 'react'

export default class Bomb extends Component {
    constructor(props) {
        super(props)
        this.state = {
            secondsLeft:props.initialCount
        }   
    }
    
    timer = () => {
        setInterval(() => {
            this.setState({
                secondsLeft: this.state.secondsLeft - 1
            })
        }, 1000)
    }

    render() {
        if (this.state.secondsLeft > 0) {
            return (<div className="timer" onClick={this.timer}>{this.state.secondsLeft} seconds left before I go boom!</div>)
        } else {
            return (<div className="timer" onClick={this.timer}>Boom!</div>)
        }
    }
}