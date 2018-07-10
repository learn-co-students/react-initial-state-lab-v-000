import React, {Component} from 'react';

class Bomb extends Component {
  constructor(props) {
    super(props);

    this.state = {
      secondsLeft: this.props.initialCount
    }
  }

  render() {
    const timer = this.state.secondsLeft;
    return (
      <p>{timer === 0 ? "Boom!" : timer + " seconds left before I go boom!"}</p>
    )
  }
}

export default Bomb;
