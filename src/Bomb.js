import React , {Component} from 'react';

export default class Bomb extends React.Component{
  constructor(props){
    super(props);
    this.state={
      secondsLeft: this.props.initialCount
    }
  }

  render(){
    return(
      (this.state.secondsLeft === 0) ? <div><p>Boom!</p></div> : <div><p>{this.state.secondsLeft} seconds left before I go boom!</p></div>
    )
  }
}
