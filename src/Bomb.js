// your Bomb code here!
import React from 'react';
export default class Bomb extends React.Component {
    constructor(props) {
        super()
        this.state = {
          secondsLeft: props.initialCount
        }
    }

    render() {
        while (this.state.secondsLeft > 0) {
            return (
                <div>{this.state.secondsLeft} seconds left before I go boom!</div>
            )
        }
        return (<div>Boom!</div>)
    }
}
