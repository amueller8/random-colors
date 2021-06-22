import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import {ColorCard} from './components/colorCard.js';





function App() {
  const [paletteMode, togglePaletteMode] = useState(false);
  if (paletteMode){
    return (
      <div className="App">
        <h1>Generate random colors</h1>
        <div className= "color-zone">
          <ColorCard paletteMode = {true}/>
          <ColorCard paletteMode = {true}/>
          <ColorCard paletteMode = {true}/>
        </div>
        
        <button onClick = {() => togglePaletteMode(paletteMode ? false : true)}>
          Enter single color mode
        </button>

      </div>
    );

  } else {
    return (
      <div className="App">
        <h1>Generate a random color</h1>
        <div className= "color-zone">
          <ColorCard paletteMode = {false}/>
        </div>
        
        <button onClick = {() => togglePaletteMode(paletteMode ? false : true)}>
          Enter random palette mode
        </button>

      </div>
    );
  }
}

export default App;
