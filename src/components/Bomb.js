import React from 'react';

export default class Bomb extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      secondsLeft: this.props.initialCount
    };
  } //end of constructor

  render(){
      if (this.state.secondsLeft > 0){
        return (
          <p>{this.state.secondsLeft} seconds left before I go boom!</p>
        );
      } else {
        return <p>Boom!</p>
      }

  } // end of render
}
