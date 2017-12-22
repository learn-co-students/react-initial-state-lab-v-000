import React from 'react';

export default class Bomb extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           secondsLeft: props.initialCount
        }
    }
    render(){
        let statement = "Boom!";
        if(this.state.secondsLeft > 0){
            statement = this.state.secondsLeft + " seconds left before I go boom!"
        } 
        return( 
            <p>{statement}</p>
        );
    }
}

//It should render the text '<SECONDS_LEFT> seconds left before I go boom!', where <SECONDS_LEFT> is the value of secondsLeft.
//If secondsLeft equals 0, it should render 'Boom!' instead.
