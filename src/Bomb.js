// your Bomb code here!

import React from 'react';

export default class Bomb extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render() {
    let output
    
    if (this.state.secondsLeft > 0) {
      output = `${this.state.secondsLeft} seconds left before I go boom!`
    } else {
      output = "Boom!"
    }

    return (
      <div>{output}</div>
    )
  }
}

