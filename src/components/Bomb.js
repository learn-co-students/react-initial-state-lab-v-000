import React from 'react';

class Bomb extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      secondsLeft: this.props.initialCount
    }
  }

  render() {
    let message;

    if(this.state.secondsLeft > 0) {
      message = <p>{this.state.secondsLeft} seconds left before I go boom!</p>
    } else {
      message = <p>Boom!</p>
    }
    return <div>
      {message}
    </div>
  }
}

export default Bomb;