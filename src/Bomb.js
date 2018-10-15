import React from 'react';

class Bomb extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      secondsLeft: this.props.initialCount
    }
  }

  render() {
    let text;

    if (this.state.secondsLeft === 0) {
      text = 'Boom!'
    } else {
      text = `${this.state.secondsLeft} seconds left before I go boom!`
    }

    return (
      <div className="bomb-timer">
        {text}
      </div>
    )
  }
}

export default Bomb;
