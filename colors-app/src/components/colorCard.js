import React from 'react';



export class ColorCard extends React.Component{
    

    constructor (props) {
        super(props);
        this.state = {color: "#" + Math.floor(Math.random()*16777215).toString(16)};
        this.generateColor = this.generateColor.bind(this);
        
    }

    generateColor(){
        // borrowed color generator from https://css-tricks.com/snippets/javascript/random-hex-color/
        const newColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        this.setState((state) => {
            return {color: newColor}
            
        });

    }

    render(){
        const colorStyles = {
            width: "50%",
            margin: "auto",
            height: "50vh",
            fontFamily: "Helvetica", //if I was being fancy i'd get helvetica nueue
            border: "1px solid black"
        
        };

        const paletteStyle = {
            width: "25%",
            marginLeft: "5%",
            height: "50vh",
            float: "left",
            marginBottom: "2em",
            
            fontFamily: "Helvetica", //if I was being fancy i'd get helvetica nueue
            border: "1px solid black"

        }

    

        if(!this.props.paletteMode){
            return(
                <div style = {{alignItems: "center"}}> 
                <div style = {colorStyles}>
                    <div style={{backgroundColor: this.state.color, height: "80%"}}>
                    </div>
                    <div style= {{backgroundColor: 'white'}}>
                        <h2>{this.state.color}</h2>
                    </div>
                </div>

                <button onClick = {this.generateColor} style = {{margin: "2em"}}>New Color </button>
                </div>
                
                );

        } else {
            //palette version
            return(
                <div style={{alignItems: "center"}}> 
                <div style = {paletteStyle}>
                    <div style={{backgroundColor: this.state.color, height: "80%"}}>
                    </div>
                    <div style= {{backgroundColor: 'white'}}>
                        <h2>{this.state.color}</h2>
                    </div>
                </div>
                
                </div>
                
            );
        }
        

    }

}



