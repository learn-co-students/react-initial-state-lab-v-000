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
    var boom = this.state.secondsLeft == 0 ? "Boom!" : this.state.secondsLeft + ' seconds left before I go boom!'
    
    return (
      <div className="bomb">
        {boom}
      </div>
    );
  }
}


export default Bomb