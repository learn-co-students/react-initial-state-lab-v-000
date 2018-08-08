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
     //It should only render out the text 'I am on slide <CURRENT_SLIDE>', where <CURRENT_SLIDE> is the value of this.state.currentSlideIndex.
     return (
       //<div>{this.state.secondsLeft} seconds left before I go boom!</div>
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
