import React from 'react';

export default class Bomb extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render() {
    let countdown
    if(this.state.secondsLeft === 0) {
      countdown = "Boom!"
    }else {
      countdown = `${this.state.secondsLeft} seconds left before I go boom!`
    }

    return <p>{countdown}</p>
  }
}