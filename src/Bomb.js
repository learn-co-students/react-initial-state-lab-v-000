// your Bomb code here!
import React from 'react'

export default class Bomb extends React.Component {

  constructor(props) {
    super (props)
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render () {
    const secondsLeft = this.state.secondsLeft
    let message

    if (secondsLeft == 0) {
      message = <p>Boom!</p>
    } else {
      message = <p>{secondsLeft} seconds left before I go boom!</p>
    }
    return (
      <div>
        {message}
      </div>
    )
  }
}
