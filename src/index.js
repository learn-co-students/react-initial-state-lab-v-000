import React from 'react';
import ReactDOM from 'react-dom';

import ImageSlider from './components/ImageSlider';
import Bomb from './components/Bomb';

ReactDOM.render(
  <div>
    <ImageSlider />
    <Bomb initialCount={0}/>
  </div>,
  document.getElementById('root')
);
