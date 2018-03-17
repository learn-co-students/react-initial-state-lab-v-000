// // Bomb Component Code Goes In the components/Bomb.js file, create a Bomb React component.
// Its initial state should have a property called secondsLeft. -done
// The initial value of secondsLeft is set by passing in an initialCount prop to the Bomb component.
// Don't forget to pass the argument props into the constructor (i.e., constructor(props)).
// It should render the text '<SECONDS_LEFT> seconds left before I go boom!', where <SECONDS_LEFT>
// is the value of secondsLeft.
// If secondsLeft equals 0, it should render 'Boom!' instead.

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
