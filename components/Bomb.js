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
            <div>{if this.state.secondsLeft === 0 return 'Boom!'
                else 
                return this.state.secondsLeft + ' seconds left before I go boom!'}</div>
        )
    }
}

export default Bomb;