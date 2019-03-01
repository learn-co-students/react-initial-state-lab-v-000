// your Bomb code here!
import React, { Component } from 'react';

export default class Bomb extends Component {
  constructor(props) {
    super(props)
      this.state = {
      secondsLeft: this.props.initialCount
    }
  }


  render() {
    const timeleft = this.state.secondsLeft
    let reply

    if (timeleft > 0) {
      reply = `${timeleft} seconds left before I go boom!`
    } else {
      reply = `Boom!`
    }

    return (
      <div id="bomb">
      {reply}
      </div>
    )
  }
}
