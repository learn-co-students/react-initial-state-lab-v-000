import React from 'react';
import ReactDOM from 'react-dom';

import ImageSlider from './components/ImageSlider';
import Bomb from './components/Bomb';
import EyesOnMe from './components/EyesOnMe';
import Keypad from './components/Keypad';

ReactDOM.render(
  <div>
    <ImageSlider></ImageSlider>
    <Bomb initialCount={120} />
    <Keypad />
    <EyesOnMe />
  </div>,
  document.getElementById('global')
);
