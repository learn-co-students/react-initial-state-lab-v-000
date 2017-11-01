// Bomb Component Code Goes Here
import React from 'react';

export default class Bomb extends React.Component{
 constructor(props) {
    super();
 
    this.state = {
        secondsLeft: props.initialCount
    }
  }


   render(){
    let phrase;
       if(this.state.secondsLeft === 0){
         phrase = 'Boom!';
       }
        else{
           phrase=`${this.state.secondsLeft} seconds left before I go boom!`
        }
    return (
        <div>
            <p>{phrase}</p>
        </div>
      )
    }
 

}