// Bomb Component Code Goes Here
import React from 'react'

class Bomb extends React.Component {
  constructor(props) {
    super(props)

      this.state = {
        secondsLeft: props.initialCount
      }
  }

  render() {
    return (
      // <div className='bomb'>{this.state.secondsLeft === 0 ? 'boom' : ({this.state.secondsLeft} seconds left before I go boom!)}</div>
      <div>
          {this.state.secondsLeft === 0 ? ('Boom!') :
                (`${this.state.secondsLeft} seconds left before I go boom!`)
          }
      </div>
    )
  }
}

export default Bomb
