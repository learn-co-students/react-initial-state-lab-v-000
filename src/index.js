import React from 'react';
import ReactDOM from 'react-dom';
import ImageSlider from './ImageSlider';
import Bomb from './Bomb';

ReactDOM.render(
  <div>
    <ImageSlider />
    <br></br><br></br><br></br>
    <Bomb initialCount={120} />
  </div>,
  document.getElementById('root')
);
