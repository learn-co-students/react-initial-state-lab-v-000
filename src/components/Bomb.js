import React from 'react';

class Bomb extends React.Component {
  constructor(props){
    super(props)

    this.state= {
      secondsLeft: props.initialCount
    } 
  }
  //  goBoom(){
  //   if (this.state.secondsLeft === 0){
  //     return 'Boom'
  //   } else {
  //   return <p>{this.state.secondsLeft} seconds left before I go boom!</p>
  //   }
  // }  

  render(){
    return(
      // this.goBoom()
      this.state.secondsLeft === 0 ? <p>Boom!</p> : <p>{this.state.secondsLeft} seconds left before I go boom!</p>
    )
  }
}


export default Bomb;
