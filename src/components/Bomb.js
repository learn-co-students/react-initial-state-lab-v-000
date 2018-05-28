import React from 'react';

class Bomb extends React.Component {
    constructor (props) {
        super ();
        this.state = {
            secondsLeft: props.initialCount
        }
    };

    render () {
        let timer = this.state.secondsLeft;
        if (timer > 0) {
            return tickerText(timer)
        } else {
            return (
            <div className='bomb'>
                Boom!
            </div>
            )
        }
    };
};

function tickerText(timer) {
    return (
        <div className='bomb'>
          {timer} seconds left before I go boom!
        </div>
    )
};

export default Bomb;



