// Bomb Component Code Goes Here
import React from 'react'

class Bomb extends React.Component {
  constructor(props) {
    super(props);
    var count = this.props.initialCount
    this.state = {secondsLeft: count};
  }

  render() {
    if (this.state.secondsLeft != 0) {
    return (
      <div>
        <p>{this.state.secondsLeft} seconds left before I go boom!</p>
      </div>
    )
    } else {
      return (
        <div>
        <p>Boom!</p>
      </div>
      )
      }
  }
}

export default Bomb;
