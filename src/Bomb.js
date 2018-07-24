import React from 'react';
import PropTypes from 'prop-types';

class Bomb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsLeft: this.props.initialCount
    }
  }

  render() {
    if (this.state.secondsLeft > 0) {
      return (
        <div>
          {this.state.secondsLeft} seconds left before I go boom!
        </div>
      )
    } else {
      return (
        <div>
          Boom!
        </div>
      )
    }
  }
}

Bomb.propTypes = {
  initialCount: PropTypes.number.isRequired
}

export default Bomb;
