import React, { Component } from 'react'

export default class Bomb extends Component {

    constructor(props) {
        super(props)
            this.state = {
                secondsLeft: this.props.initialCount
            }
    }

    checkTimer = () => {
        let time = this.state.secondsLeft
        if (time === 0) {
            return <div>Boom!</div>
        } else {
            return <div>{this.state.secondsLeft} seconds left before I go boom!</div>
        }
    }

    render() {
        return(
            <div>{this.checkTimer()}</div>
        )
    }

}

