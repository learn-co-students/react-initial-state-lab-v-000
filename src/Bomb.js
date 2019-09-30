// your Bomb code here!
import React from 'react';

class Bomb extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  renderBoom = () => {
    if (this.state.secondsLeft === 0) {
      return `Boom!`
    } else {
      return `${this.state.secondsLeft} seconds left before I go boom!`
    }
  }

  render() {
    return (
      <div>
      {this.renderBoom()}
      </div>
    )
  }

}

export default Bomb;
