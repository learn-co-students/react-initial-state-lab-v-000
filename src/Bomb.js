import React, {Component} from 'react';

export default class Bomb extends Component {

  constructor(props) {
    super(props)

    this.state = {
      secondsLeft: this.props.value
    }
  }

  render(){

    const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;
    return (
      <h1>{message} </h1>
    )
  }
}
