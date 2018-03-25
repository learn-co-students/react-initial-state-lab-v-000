import React from 'react';

class Bomb extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render(){
    let message = (this.state.secondsLeft === 0) ? "Boom!" : `${this.state.secondsLeft} seconds left before I go boom!`
    return (
      <div>
        <p>{message}</p>
      </div>
    );
  }
}

export default Bomb;
