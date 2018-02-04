import React from 'react';

export default class Bomb extends React.Component {
  constructor(props) {
    super();

    this.state = {
      secondsLeft: props.initialCount
    }
  } 
  render() {
    const message = this.props.initialCount === 0 ? "Boom!" : `${this.state.secondsLeft} seconds left before I go boom!`
    return (
      <div className="message">
        <p>{message}</p>
      </div>
    )
  }
}