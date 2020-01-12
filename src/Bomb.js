import React from 'react';

class Bomb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {secondsLeft: this.props.initialCount};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    ); 
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
  	const n = this.state.secondsLeft > 0 ?  this.state.secondsLeft : 1;
    this.setState({
      secondsLeft:  n - 1 
    });
  }

  render() {
  	const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;
	  return (    
	        <h2>{message}</h2>
	    );
  }
}

export default Bomb