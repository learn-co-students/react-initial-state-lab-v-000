import React from 'react';

class Bomb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsLeft: props.initialCount
    }
  }
  
  render()  {
    var pushOut;
    if (this.state.secondsLeft === 0) {
      pushOut = <h1>Boom!</h1>
    } else {
      pushOut = <h1>{this.state.secondsLeft} seconds left before I go boom!</h1>
    }
    return(
      <div>
        {pushOut}
      </div>
      );
  }
}

module.exports = Bomb