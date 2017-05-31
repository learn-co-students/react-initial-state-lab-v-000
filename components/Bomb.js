import React from 'react';

export default class Bomb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsLeft: props.initialCount
    };
  }

  render() {
    const countMsg = `${this.state.secondsLeft} seconds left before I go boom!`;
    const doneMsg = 'Boom!';
    const message = (this.state.secondsLeft > 0) ? countMsg : doneMsg;
    return (
      <div>{message}</div>
    );
  }
}
