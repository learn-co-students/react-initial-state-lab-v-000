import React from 'react';
import ReactDOM from 'react-dom';

import ImageSlider from './components/ImageSlider';
import Bomb from './components/Bomb';

ReactDOM.render(
  <div>
    <ImageSlider></ImageSlider>
    <br />
    <Bomb initialCount={100} />
  </div>,
  document.getElementById('global')
);
