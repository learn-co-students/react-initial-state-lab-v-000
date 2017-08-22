import React from 'react';

export default class Bomb extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      secondsLeft: this.props.initialCount
    }
  }

  render() {
    return (
      <div className="Bomb">
        {this.state.secondsLeft == 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`}
      </div>
    )
  }
}
