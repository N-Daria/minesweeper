import './App.css';
import InitialGameField from './components/gameField/gameField';

function App() {
  InitialGameField.createGameField();

  return (
    <div className="App">
      <h1>Hello React!</h1>
    </div>
  );
}

export default App;
