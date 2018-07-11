// your Bomb code here!
import React from 'react';

export default class Bomb extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            secondsLeft: props.initialCount
        }
    }

    render() {
        const result = this.state.secondsLeft === 0 ? "Boom!" : `${this.state.secondsLeft} seconds left before I go boom!`
        return (
            <div className="bomb">
                {result}
            </div>
        )
    }
}