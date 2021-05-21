import React from 'react'

class Bomb extends React.Component{

    constructor(props){
        super()
        this.state = {
            secondsLeft: props.initialCount
        }}

    message = (time) => time > 0 ? `${time} seconds left before I go boom!` : "Boom!"

    render(){
        return(
                <div>{this.message(this.state.secondsLeft)}</div>
        )
    }
}

export default Bomb
