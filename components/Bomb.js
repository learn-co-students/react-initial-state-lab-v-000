import React from 'react'

export default class Bomb extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      secondsLeft: `${props.initialCount}`
    }
  }

  render () {
    return (
      <div className="bomb">{this.state.secondsLeft > 1 ? `${this.state.secondsLeft} seconds left before I go boom!` : "Boom!"}</div>
    )
  }
}
