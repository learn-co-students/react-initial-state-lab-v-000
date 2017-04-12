import React from 'react'

class Bomb extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      secondsLeft: this.props.initialCount
    }
  }

  render() {
    const secondsLeft = this.state.secondsLeft
    let message = null

    if (secondsLeft > 0) {
      message = `${secondsLeft} seconds left before I go boom!`
    } else {
      message = 'Boom!'
    }

    return(
      <div>
        {message}
      </div>
    )
  }
}

export default Bomb