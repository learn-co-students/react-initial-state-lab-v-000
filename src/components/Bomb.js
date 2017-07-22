// Bomb Component Code Goes Here
import React from 'react';

class Bomb extends React.Component {
  constructor(props) {
    super();
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render() {
    var response;
    if(this.state.secondsLeft === 0) {
      response = "Boom!"
    } else {
      response = `${this.state.secondsLeft} seconds left before I go boom!`
    }
    return(
      <div>
      {response}
      </div>
    )
  }
}
export default Bomb;
