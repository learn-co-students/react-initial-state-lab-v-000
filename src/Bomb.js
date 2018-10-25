import React, { Component } from 'react'

export default class Bomb extends Component {
    state = {
        secondsLeft: this.props.initialCount,
    }
    render() {
        const s = this.state.secondsLeft;
        return (
            <div>
                {s === 0 ? "Boom!" : `${s} seconds left before I go boom!`}
            </div>
        )
    }
}

