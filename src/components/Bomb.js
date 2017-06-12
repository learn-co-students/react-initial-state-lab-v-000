import React from 'react';

class Bomb extends React.Component {
  constructor(initialCount) {
    super(initialCount);
    
    this.state = {
      secondsLeft: initialCount
    }
  }
  
  render() {
    return (
      <div className="bomb">
        if (this.state.secondsLeft === 0) {
          "Boom!"
        }
        else {
          "{this.state.secondsLeft} seconds left before I go boom!"
        }
      </div>
    )
  }
}