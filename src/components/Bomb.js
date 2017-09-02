import React, { Component } from 'react';

export default class Bomb extends Component {
  constructor(props){
    super(props);

    this.state = {
      secondsLeft: this.props.initialCount
    }
  }

  render() {
    const { secondsLeft } = this.state;

    return (
      <div>
        {secondsLeft > 0 ? `${secondsLeft} seconds left before I go boom!` : 'Boom!'}
      </div>
    )
  }
}
