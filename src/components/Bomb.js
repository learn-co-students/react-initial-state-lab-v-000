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
    const SECONDS_LEFT = parseInt(this.state.secondsLeft)

    if(SECONDS_LEFT == 0) {
      return (
        <p>
        Boom!
        </p>
      )} else {
      return (
      <p>
        {SECONDS_LEFT} seconds left before I go boom!
      </p>
      )}
    }
  }

Bomb.propTypes = {
  initialCount: PropTypes.number
};

export default Bomb;
