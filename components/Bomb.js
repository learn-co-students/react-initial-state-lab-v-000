import React from 'react'

export default class Bomb extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      secondsLeft: this.props.initialCount
    }
  }

  render() {
    return (
      this.state.secondsLeft === 0 ? <div className="bomb">Boom!</div> : <div className="bomb">{this.state.secondsLeft} seconds left before I go boom!</div>
    )
  }
}
