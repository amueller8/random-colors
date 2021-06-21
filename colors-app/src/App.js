import logo from './logo.svg';
import './App.css';
import {ColorCard} from './components/colorCard.js';

function createCards(){
  document.getElementById('root').append(<ColorCard onclick={this.generateColor}/>);
  document.getElementById('color-zone').append(<h1>hi</h1>);
}
function App() {
  return (
    <div className="App" id = "color-zone">
      <h1>Generate a random color</h1>
      <ColorCard />
      <button onclick={createCards}>Go</button>
    </div>
  );
}

export default App;
