
import React, { Component } from 'react';

export default class Bomb extends Component {

    constructor(props) {
      super(props)

      this.state = {
       initialCount: this.props.value,
      }
    }
    //
    // handleClick = () => {
    //   this.setState({
    //     color: '#333'
    //   })
    // }

    render() {
      return (
        <div className="">
      //  style={{backgroundColor: this.state.color}}
      //   onClick={this.handleClick}>
        </div>
      )
    }
  }
