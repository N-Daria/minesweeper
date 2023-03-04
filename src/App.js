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
  // const [timer, setTimer] = React.useState('00');
  // const [timerId, setTimerId] = React.useState('');

  // const tick = () => {
  //   let oldsec = +timer;
  //   setTimer((oldsec += 1));
  // };

  // const start = () => {};

  // const stop = () => {
  //   clearInterval(timerId);
  // };

  // const startGame = () => {
  //   start();
  // };

  // const startTimer = () => {
  //   debugger;
  //   const timerId = setInterval(() => {
  //     debugger;
  //     setTimer(+timer + 1);
  //   }, 1000);

  //   return timerId;
  // };

  // const ff = () => {
  //   const timerId = setInterval(() => {
  //     setSeconds(timer + 1);
  //   }, 1000);
  // };

  const removeTimer = () => {
    allCells.forEach((el) => {
      el.removeEventListener('click', removeTimer);
    });
  };

  React.useEffect(() => {
    setGameField(getInitialGameField());
    setAllCells(Array.from(document.querySelectorAll('.cell')));
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

  // const stop = () => {
  //   clearInterval(startTimer());
  // };

  const startGame = () => {
    console.log('start game function');
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
          <Timer />
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
