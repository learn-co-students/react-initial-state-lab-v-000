// your Bomb code here!
import React from 'react';
export default class Bomb extends React.Component {

  constructor(props) {
      super(props)
      this.state = {
        secondsLeft: this.props.initialCount
      }
    }


incrementTimer = () =>{
  this.setState({
    secondsLeft: this.state.secondsLeft - 1
  })
}

timer = () => {
  if (this.state.secondsLeft === 0){return <h1>Boom!</h1>}
  else {
    this.incrementTimer()
    return <p>{this.state.secondsLeft} seconds left before I go boom!</p>}
}


  render () {
      return (
      this.timer()
      )
    }
}
