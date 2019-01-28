import React from 'react';

export default class Bomb extends React.Component {
  constructor(props) {
    super(props);
    this.state = { secondsLeft: this.props.initialCount }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.timer(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  timer() {
    if (this.state.secondsLeft > 0) {
      this.setState({ secondsLeft: this.state.secondsLeft -1 })
    }
  }

  render() {
    if (this.state.secondsLeft == 0 ) {
      return <h1><font color="red">Boom!</font></h1>
    } else {
    return <h1><font color="blue">{ this.state.secondsLeft } seconds left before I go boom!</font></h1>
    }
  }
}
