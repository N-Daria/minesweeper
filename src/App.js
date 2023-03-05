/* eslint-disable no-debugger */
import React from 'react';
import './App.css';
import { getInitialGameField, bombsNumber } from './components/InitialGameField/InitialGameField';
import GameField from './components/GameField/GameField';
import Timer from './components/Timer/Timer';

function App() {
  const [gameField, setGameField] = React.useState([]);
  const [allCells, setAllCells] = React.useState([]);
  const [button, setButton] = React.useState('🙂');
  const [newGame, setNewGame] = React.useState(false);
  const [isTimer, setIsTimer] = React.useState(false);

  const removeTimer = () => {
    setIsTimer(true);
    setNewGame(true);

    allCells.forEach((el) => {
      el.removeEventListener('click', removeTimer);
    });
  };

  React.useEffect(() => {
    setGameField(getInitialGameField());
  }, [newGame]);

  React.useEffect(() => {
    setAllCells(Array.from(document.querySelectorAll('.cell')));
  }, [gameField]);

  React.useEffect(() => {
    allCells.forEach((el) => {
      el.addEventListener('click', removeTimer);
    });
  }, [allCells]);

  // &#128526; - очки
  // &#128565; - проигрыш

  const startGame = () => {
    console.log('start game function');
  };

  const resetGame = () => {
    setNewGame(false);
    setIsTimer(false);
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

          {isTimer ? <Timer /> : <p className="game__timer">0000</p>}
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
