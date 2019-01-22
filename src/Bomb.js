import React from 'react';

class Bomb extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      secondsLeft: props.initialCount
    };
  }

  render() {
    const isTimeRemaining = this.state.secondsLeft == 0;

    return(
      <div>
        {isTimeRemaining ? 'Boom!' : FormattedTimeLeft(this.state)}
      </div>
    );
  }
}

function FormattedTimeLeft(state) {
  return <div>{state.secondsLeft + " seconds left before I go boom!"}</div>
}

export default Bomb
