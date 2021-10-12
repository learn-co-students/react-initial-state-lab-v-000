import  React  from "react";


class Bomb extends React.Component {
  constructor(props) {
    super(props);
    this.state = { secondsLeft: this.props.initialCount };
  }
   render() {
    if (this.state.secondsLeft ) {
      return <p>{this.state.secondsLeft} seconds left before I go boom!</p>
    }
    return <p>Boom!</p>
  }

}

export default Bomb;