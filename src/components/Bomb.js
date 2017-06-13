import React from 'react';

class Bomb extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      secondsLeft: parseInt(`${props.initialCount}`)
    }
  }
  
  render() {
    var returnValue;
    if (this.state.secondsLeft === 0) {
      returnValue = "Boom!"
    }
    else {
      var returnValue = this.state.secondsLeft + ' seconds left before I go boom!'
    }
    return (
      <p>{returnValue}</p>
    )
  }
}

export default Bomb;