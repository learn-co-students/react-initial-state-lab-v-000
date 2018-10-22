// your Bomb code here!
import React from 'react'

export default class Bomb extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      secondsLeft: this.props.initialCount
    }
  }
  render(){
    return(
      <div>
        if (secondsLeft == 0) {
          <p>Boom!</p>
        } else {
          <p>{this.state.secondsLeft} seconds left before I go boom!</p>
        }
      </div>
    )
  }
}
