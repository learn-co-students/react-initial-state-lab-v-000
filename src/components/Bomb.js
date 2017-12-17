import React from 'react';
import PropTypes from 'prop-types';

class Bomb extends React.Component {
  constructor(props){
    super();
    this.state = {
      secondsLeft : props.initialCount
    }
  }
  render(){
    if(this.state.secondsLeft === 0){
      return (
          'Boom!'
      )
    } else {
      return (
        <div>
        {this.state.secondsLeft} seconds left before I go boom!
        </div>
      )
    }
  }
}

Bomb.propTypes = {
  initialCount : PropTypes.number
}

export default Bomb;
