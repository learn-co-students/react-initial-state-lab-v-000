import React from 'react';

class Bomb extends React.Component {
  constructor(props) {
    super();

    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render() {
    var sentence = null;
    if(this.state.secondsLeft > 0){
      sentence = `${this.state.secondsLeft} seconds left before I go boom!`
    } else {
      sentence = `Boom!`
    }
    return (
      <p>
        {sentence}
      </p>
    )
  }
}

export default Bomb;
