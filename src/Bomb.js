import React from 'react'

export default class Bomb extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      secondsLeft: this.props.initialCount
    }
  }
  render() {
    //   if (this.state.secondsLeft === 0) {
    //     var message = 'Boom!'
    //   } else {
    //   var message = `${this.state.secondsLeft} seconds left before I go boom!`
    //   }
    // return (
    //   <div>{message}</div>
    // )
    const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;

    return (
      <div>{message}</div>
    )
  }
}
