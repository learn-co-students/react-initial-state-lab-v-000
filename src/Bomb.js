import React, { Component }from 'react'

export default class Bomb extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            secondsLeft: this.props.initialCount
        }
    }
    render() {
        const text = `${this.props.initialCount} seconds left before I go boom!`
        const boom = `Boom!`
        return(
            <div>
                <p>{this.state.secondsLeft ? text : boom }</p>
            </div>
            
        )
    }
}