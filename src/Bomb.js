import React, { Component }  from 'react';
// your Bomb code here!

export default class Bomb extends React.Component{
    constructor(props){
        super();
        this.state={
            secondsLeft: props.initialCount
        }
    }
    bombText(){
        return this.state.secondsLeft===0?"Boom!": `${this.state.secondsLeft} seconds left before I go boom!`
    }
    render(){
        return <div>{this.bombText()}</div>
    }
}