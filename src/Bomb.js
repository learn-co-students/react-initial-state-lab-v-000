import React, { PropTypes }  from 'react';


class Bomb extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render() {
    const message = !this.state.secondsLeft ? "Boom!" : `${this.state.secondsLeft} seconds left before I go boom!`

    return (
      <div>
      {message}
      </div>
    )
  }
}
export default Bomb;
