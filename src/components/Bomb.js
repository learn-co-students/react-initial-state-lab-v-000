import React, { Component } from 'react';

export default class Bomb extends Component { 
  constructor(props) {
    super(props);

    this.state = {
      secondsLeft: this.props.initialCount
    }
  }  

  render() {
    let phrase;

    if (this.state.secondsLeft > 0) {
       phrase = `${this.state.secondsLeft} seconds left before I go boom!`
    }
    else {
      phrase = 'Boom!'
    }

    return (
      <p>{ phrase }</p>
    );
  }
}