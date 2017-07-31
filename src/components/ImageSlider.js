import React from 'react';

export default class ImageSlider extends React.Component {

 constructor(props) {
 super();

   this.state = {
     currentSlideIndex: 0
   }
 }

 render() {
   return (
     <div className="imageSlider">
       <p>I am on slide {this.state.currentSlideIndex}</p>
     </div>
   );
 }
}
