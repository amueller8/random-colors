import React from 'react';

export class ColorCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {color: "#" + Math.floor(Math.random()*16777215).toString(16)};
        this.generateColor = this.generateColor.bind(this);
        
    }

    generateColor(){
        // borrowed color generator from https://css-tricks.com/snippets/javascript/random-hex-color/
        const newColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        this.setState({color: newColor});

    }

    render(){
        const styles = {
            width: "50%",
            margin: "auto",
            height: "50vh",
            fontFamily: "Helvetica", //if I was being fancy i'd get helvetica nueue
            border: "1px solid black"

        };
        return(
        <div onclick = {this.generateColor} style = {styles}>
            <div style={{backgroundColor: this.state.color, height: "80%"}}>
            </div>
            <div style= {{backgroundColor: 'white'}}>
                <h2>{this.state.color}</h2>
            </div>
        </div>
        );

    }

}