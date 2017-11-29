// Bomb Component Code Goes Here
import React from 'react';

export default class Bomb extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render() {
    const secondsLeft = this.state.secondsLeft;
    return (
      <div className="bomb">
        {secondsLeft ? `${secondsLeft} seconds left before I go boom!` : 'Boom!'}
      </div>
    );
  }
}
