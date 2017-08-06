// Bomb Component Code Goes Here
import React from 'react';


class Bomb extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render() {
    var sL = this.state.secondsLeft
    if (sL === 0){
      var theResponse = "Boom!"
    }

    else {
      var theResponse = `${sL} seconds left before I go boom!`
    }
    return (
      <div className="image-slider">
        <p>{theResponse}</p>
      </div>
    );
  }
}

export default Bomb
