import React from 'react';

class Bomb extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      secondsLeft: props.initialCount
    }
  }

  tick() {
    this.setState({
      secondsLeft: this.state.secondsLeft - 1
    });
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

  render() {
    return (
      <div className="bomb">
        {this.state.secondsLeft > 0 ? (
          <div>{this.state.secondsLeft} seconds left before I go boom!</div>
        ) : (
            <div>Boom!</div>
          )}
      </div>
    );
  }
}

export default Bomb;

