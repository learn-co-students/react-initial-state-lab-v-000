import React from 'react';

class Bomb extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render() {
    return (
      <div className="bomb">
        {this.state.secondsLeft > 0 && <p>
          {this.state.secondsLeft} seconds left before I go boom!</p>
        }
        {this.state.secondsLeft === 0 &&
          <p>Boom!</p>
        }
      </div>
    );
  }
}

export default Bomb;
