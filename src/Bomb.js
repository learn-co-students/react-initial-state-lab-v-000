// your Bomb code here!

import React from 'react';

class Bomb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render() {
    const SECONDS_LEFT = this.state.secondsLeft
    if (SECONDS_LEFT > 0) {
      return (
        <div className="bomb">
          {SECONDS_LEFT} seconds left before I go boom!
        </div>
      )
    } else {
      return (
        <div className="bomb">
          Boom!
        </div>
      )
    }
  }
}

export default Bomb;
