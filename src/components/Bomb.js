import React from 'react';

export default class Bomb extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render() {
    if(this.state.secondsLeft === 0) {
      return (
        <div className="bomb-timer">
          Boom!
        </div>
      )
    } else {
      return (
        <div className="bomb-timer">
          {this.state.secondsLeft} seconds left before I go boom!
        </div>
      )
    }
  }
}
