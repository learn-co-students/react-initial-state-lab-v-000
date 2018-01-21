import React from 'react'

export default class Bomb extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            secondsLeft: this.props.initialCount
        }
    }

    render() {
        let timeLeft; 
        if(this.state.secondsLeft == 0) {
            timeLeft = 'Boom!'
        } else {
            timeLeft = `${this.state.secondsLeft} seconds left before I go boom!`
        }
        return (
            <div className="bomb">
                {timeLeft}
            </div>
        )
    }
}
