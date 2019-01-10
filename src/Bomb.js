import React, { Component } from 'react';

export default class Bomb extends Component {

  constructor(props) {
    super(props)
    this.state = {
      secondsLeft: this.props.initialCount
    }
  }

  render() {
    if (this.state.secondsLeft === 0) {
      return (
        <div className="bomb">
          <p>Boom!</p>
        </div>
      )
    } else {
      return (
        <div className="bomb">
          <p>{this.state.secondsLeft} seconds left before I go boom!</p>
        </div>
      )
    }
  }
}
