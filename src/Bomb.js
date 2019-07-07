// your Bomb code here!
import React from 'react';

class Bomb extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      secondsLeft: parseInt(`${props.initialCount}`, 10)
    }
  }

  render(){
    if (this.state.secondsLeft > 0){
      return(
        <div className="bomb">
          {this.state.secondsLeft} seconds left before I go boom!
      </div>
      )
    } else {
      return(
        <div className="bomb">
          Boom!
      </div>
    )
    }
  }
}

export default Bomb
