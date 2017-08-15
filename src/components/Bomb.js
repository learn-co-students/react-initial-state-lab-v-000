import React from 'react';

class Bomb extends React.Component { 
    constructor(props) {
      super(props);
   
      this.state = {
        secondsLeft: props.initialCount
      }
    }
   
    render() {
      let text = null;
      if (this.state.secondsLeft > 0) {
          text = `${this.state.secondsLeft} seconds left before I go boom!`
      } else {
          text = "Boom!"
      }
      
      return (
          <div>
            {text}
          </div>
      )
    }
  }
   
  export default Bomb;
  