import React from 'react';
import PropTypes from 'prop-types';

class Bomb extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      secondsLeft: props.initialCount
    }
  }
  render() {
    const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`

    return (
      <div className="bomb">
        <p>{message}</p>
      </div>
    )
  }
}
export default Bomb;
