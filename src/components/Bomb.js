import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Bomb extends Component {
  state = {
    secondsLeft: this.props.initialCount,
  };

  render() {
    const { secondsLeft } = this.state;
    return (
      <div>
        {secondsLeft === 0
          ? 'Boom!'
          : `${secondsLeft} seconds left before I go boom!`}
      </div>
    );
  }
}

Bomb.propTypes = {
  initialCount: PropTypes.number.isRequired,
};

export default Bomb;
