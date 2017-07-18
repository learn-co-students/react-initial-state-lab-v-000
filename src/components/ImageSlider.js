import React from 'react';

export default class ImageSlider extends React.Component {
  constructor(props){
    super();

    this.state = {
      currentSlideIndex: 0
    };
  } //end of constructor

  render(){
    return(
      <p>I am on slide {this.state.currentSlideIndex}</p>
    );
  } // end of render
}
