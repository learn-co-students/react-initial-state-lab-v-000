import React from 'react';

class Bomb extends React.Component {
  constructor(props){
    super();
    this.state ={
      secondsLeft: props.initialCount
    }
  }
  render(){
    const remainingSec = this.state.secondsLeft;
    const boom = remainingSec > 0 ?
      `${remainingSec} seconds left before I go boom!` : 'Boom!'
    return(
      <div className="seconds-left">
        {boom}
      </div>

    )
  }
}


export default Bomb;
