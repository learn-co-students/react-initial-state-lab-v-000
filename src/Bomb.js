// your Bomb code here!
import React from 'react'

class Bomb extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render() {
    const setUsUp = this.state.secondsLeft
    let bombTimer;
    if (setUsUp > 0) {
       bombTimer = `${setUsUp} seconds left before I go boom!`
    } else {
       bombTimer = 'Boom!'
    }
    return(
      <div>{bombTimer}</div>
    )
  }
}




export default Bomb
