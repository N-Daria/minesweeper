/* eslint-disable no-debugger */
import React from 'react';
import './App.css';
import { getInitialGameField, bombsNumber } from './components/InitialGameField/InitialGameField';
import GameField from './components/GameField/GameField';

function App() {
  const [gameField, setGameField] = React.useState([]);

  const [button, setButton] = React.useState('🙂');
  const [newGame, setNewGame] = React.useState(false);
  const [timer, setTimer] = React.useState('00');

  React.useEffect(() => {
    debugger;
    setGameField(getInitialGameField());
  }, [newGame]);

  // &#128526; - очки
  // &#128565; - проигрыш

  const startGame = () => {
    console.log(1);
  };

  const resetGame = () => {
    return newGame ? setNewGame(false) : setNewGame(true);
  };

  const onMouseDown = () => {
    setButton('😮');
  };

  const onMouseUp = () => {
    setButton('🙂');
  };

  return (
    <main className="body">
      <section className="game">
        <article className="game__info">
          <p className="game__bombsNumber">{`0${bombsNumber}`}</p>
          <button
            className="game__button"
            aria-label="reset the field"
            type="button"
            onClick={resetGame}
          >
            {button}
          </button>
          <p className="game__timer">{timer}</p>
        </article>

        <GameField
          gameField={gameField}
          startGame={startGame}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
        />
      </section>
    </main>
  );
}

export default App;
