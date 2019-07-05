import React from 'react';

 class Bomb extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        secondsLeft: props.initialCount
      }
    }

    render() {
      const timeLeft = this.state.secondsLeft
      let message = timeLeft > 0 ? `${this.state.secondsLeft} seconds left before I go boom!` : 'Boom!'
      return (
        <div className="bomb-status">
           {message}
        </div>
      )
    }
 }

export default Bomb;
