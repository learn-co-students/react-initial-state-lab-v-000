import React, { Component } from 'react';

export default class Bomb extends Component {
  constructor(props) {
    super(props)
    this.state = {
        secondsLeft: this.props.initialCount
      }
  }

  render() {

    if (this.props.initialCount !== 0) {
    return (
      <div>
        {this.props.initialCount} seconds left before I go boom!
      </div>
    )
  } else {
    return 'Boom!'
  }
}
}
