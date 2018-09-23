import React, { Component } from 'react';

export default class Bomb extends Component {

  constructor(prop){
    super(prop)

    this.state = {
      secondsLeft: this.props.initialCount
    }
  }

  render() {
    if (this.state.secondsLeft > 0){
      return (
        <div>
            { this.state.secondsLeft } seconds left before I go boom!
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
