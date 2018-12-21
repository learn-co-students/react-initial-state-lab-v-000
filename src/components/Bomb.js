import React from 'react'

class Bomb extends React.Component {
  constructor(props) {
    super()
    this.state = {
      secondsLeft: props.initialCount
      //initial state has property of secondsLeft being set to initialCount prop of Bomb comp
    }
  }
  render() {
    const message = this.state.secondsLeft === 0 ? 'Boom!' :
    `${this.state.secondsLeft} seconds left before I go boom!`
    return (
      <p>{message}</p>
      //render text of how much time left where seconds left is value of secondsLeft
    )
  }
}

export default Bomb
