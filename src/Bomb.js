import React, { Component }  from 'react';
// your Bomb code here!

export default class Bomb extends React.Component{
    constructor(props){
        super();
        this.state={
            secondsLeft: props.initialCount
        }
    }
    render(){
        return(
            <div></div>
        )
    }
}