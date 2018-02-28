import React from 'react';

export default class Bomb extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render() {
    const message = this.state.secondsLeft === 0 ? "Boom!" : `${this.state.secondsLeft} seconds left before I go boom!`

    return (
      <div>
        {message}
      </div>
    )
  }
}





// 1. In the `components/Bomb.js` file, create a `Bomb` React component.
// 2. Its initial state should have a property called `secondsLeft`.
// 3. The initial value of `secondsLeft` is set by passing in an `initialCount` prop to the `Bomb` component. Don't forget to pass the argument props into the constructor (i.e., `constructor(props)`).
// 3. It should render the text `'<SECONDS_LEFT> seconds left before I go boom!'`, where `<SECONDS_LEFT>` is the value of `secondsLeft`.
// 4. **If `secondsLeft` equals `0`, it should render `'Boom!'` instead.**
