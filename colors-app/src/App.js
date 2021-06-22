import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import {ColorCard} from './components/colorCard.js';



function App() {
  const [paletteMode, togglePaletteMode] = useState(false);
  return (
    <div className="App" id = "color-zone">
      <h1>Generate a random color</h1>
      <ColorCard id = "hey"/>
      
      <button onClick = {() => togglePaletteMode}>
        Enter random palette mode
      </button>

    </div>
  );
}

export default App;
