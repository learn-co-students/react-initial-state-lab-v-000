// your Bomb code here!
import React from 'react'

export default class Bomb extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      secondsLeft: this.props.initialCount
    }
  }




  render(){
    let goesBoom = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`
    return (
      <div>{goesBoom}</div>
    )
  }

}
