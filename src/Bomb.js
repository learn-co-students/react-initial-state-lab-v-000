import React, { Component } from 'react';

export default class Bomb extends Component {
  constructor(props) {
    super();

    this.state = { secondsLeft: props.initialCount };
  }
  render() {
    return (
      <div>
        <p>
          {this.props.initialCount ? this.props.initialCount : ''}
          {this.state.secondsLeft ? ' seconds left before I go b' : 'B'}
          oom!
        </p>
      </div>
    );
  }
}
