import React from 'react';

class Bomb extends React.Component {

    constructor(props) {
        super();
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    renderMessage = () => {
        if (this.state.secondsLeft === 0) { return 'Boom!'}
        return [
                `${this.state.secondsLeft} seconds left before I go boom!`
        ]
    };

    render() {
        return (
            <div>
                {this.renderMessage()}
            </div>
        )
    }
}

export default Bomb;
