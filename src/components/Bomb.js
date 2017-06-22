// Bomb Component Code Goes
import React from 'react';

export default class Bomb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsLeft: this.props.initialCount
    }
  }

  render() {
    let statement = null;

    if (this.state.secondsLeft !== 0) {
      statement = this.state.secondsLeft + ' seconds left before I go boom!';
    } else {
      statement = 'Boom!';
    };

    return(
      <div>
        {statement}
      </div>
    )
    
  }
}
