// your Bomb code here!
import React from 'react';

class Bomb extends React.Component {


  constructor(props) {
      super()

      this.state = {
        secondsLeft: props.initialCount
      }
    }


  render() {
    var message = `${this.state.secondsLeft} seconds left before I go boom!`;

    if (this.state.secondsLeft === 0) {
      message = "Boom!"
    }
   return (
     <div>
          {message}
     </div>
   )

}

}

export default Bomb;
