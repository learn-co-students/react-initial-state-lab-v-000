import React from 'react';

class Bomb extends React.Component {
    constructor(prop) {
        super()
        this.state = {
            secondsLeft: prop.initialCount
        }
    }
    render() { 
        return (
            <div>{this.state.secondsLeft === 0 ? 'Boom!' : this.state.secondsLeft + ' seconds left before I go boom!'}</div>
        )
    }
}

export default Bomb;