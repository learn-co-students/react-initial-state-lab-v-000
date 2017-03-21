const React = require('react');

class ImageSlider extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      currentSlideIndex: 0
    };
  }

  render(){
    return (
      <div>`I am on slide ${currentSlideIndex}` </div>
    );
  }
}


module.exports = ImageSlider;

