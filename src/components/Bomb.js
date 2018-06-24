// Bomb Component Code Goes Here
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class Bomb extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      secondsLeft: this.props.initialCount
    }
  }
  render () {
    if (this.state.secondsLeft === 0) {
    return (
      <div className="image-slider">
        Boom!
      </div>)
    } else {
      return (
        <div className="image-slider">
          {this.state.secondsLeft} seconds left before I go boom!
        </div>)
      }
  }
}
