import React from 'react';

class Bomb extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      secondsLeft: props.initialCount
    };
  }

  render(){
    let timeLeft;
    if(this.state.secondsLeft > 0){
      timeLeft = <p>{this.state.secondsLeft} seconds left before I go boom!</p>
    } else {
      timeLeft = <p>Boom!</p>
    }
    return (
      <div>{ timeLeft }</div>
    );
  }
}

export default Bomb;
