
import React, { Component } from 'react';

export default class Bomb extends Component {

    constructor(props) {
      super(props)

      this.state = {
       secondsLeft: this.props.initialCount,
      }
    }
    //
     handleState = () => {
       if (this.state.secondsLeft === 0) {
       return 'Boom!'
      } else {
      return `${this.state.secondsLeft} seconds left before I go boom!`
     }
   }
    //   this.setState({
    //     color: '#333'
    //   })
    // }

    render() {
      return (
        <div>
          <h1>{this.handleState()}</h1>
        </div>
      )
    }
  }
