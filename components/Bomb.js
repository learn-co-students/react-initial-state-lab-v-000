const React = require('react');

export default class Bomb extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      secondsLeft: this.props.initialCount
    };
  }
  render() {
    if (this.state.secondsLeft === 0) {
      return (
        <div className="bomb">Boom!</div>
      );
    }
    else {
      return (
        <div className="bomb">{this.state.secondsLeft} seconds left before I go boom!</div>
      );
    }
  }
}
