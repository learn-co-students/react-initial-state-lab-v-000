const React = require('react');

class Bomb extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render() {
    let count = this.state.secondsLeft;
    if (count === 0) {
      return (<div>Boom!</div>)
    } else {
      return (<div>{count} seconds left before I go boom!</div>)
    }
  }
}

Bomb.props

module.exports = Bomb;
