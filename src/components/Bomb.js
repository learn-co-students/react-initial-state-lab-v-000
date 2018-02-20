// Bomb Component Code Goes Here
import React from 'react';

class Bomb extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render(){
    let timer = (state) => {
      if (state.secondsLeft === 0) {
        return `Boom!`
      } else {
        return `${state.secondsLeft} seconds left before I go boom!`
      }
    }
    return(
      <div>
        {timer(this.state)}
      </div>
    )
  }
}

export default Bomb
