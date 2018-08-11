// your Bomb code here!

import React, { Component } from 'react';

export default class Bomb extends Component {
  constructor(props) {
   super(props)
   this.state = {
     secondsLeft: this.props.initialCount
   }//end this.state
  }//end constructor

   render() {
     return (
       <div>
       { this.state.secondsLeft>0 ? (
          <div>{this.state.secondsLeft} seconds left before I go boom!</div>
        ) : (
          <div>Boom!</div>
        )}
        </div>
      )
 }// end render



}//end export
