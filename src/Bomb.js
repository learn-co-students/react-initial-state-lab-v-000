import React, { Component } from 'react';

export default class Bomb extends Component {

  constructor(props) {
    super(props);
    this.state = {
      secondsLeft: this.props.initialCount
    }
  }

  countdown = () => {
    let text = ""
      if (this.state.secondsLeft === 0) {
        text = 'Boom!'
      } else if (this.state.secondsLeft > 0) {
        text = this.state.secondsLeft + ' seconds left before I go boom!'
      }
      return text
    }

  render() {
    return (
      <div>
        {this.countdown()}
      </div>
    )
  }

}
