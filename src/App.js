import React from 'react';
import './App.css';
import {
  getInitialGameField,
  createBombsArr,
} from './components/InitialGameField/InitialGameField';
import Timer from './components/Timer/Timer';
import GameField from './components/GameField/GameField';

function App() {
  const [gameField, setGameField] = React.useState([]);
  const [allCells, setAllCells] = React.useState([]);
  const [button, setButton] = React.useState('🙂');
  const [newGame, setNewGame] = React.useState(true);
  const [isTimer, setIsTimer] = React.useState(false);
  const [bombsNumber, setBombsNumber] = React.useState(0);
  const [safeCells, setSafeCells] = React.useState(0);
  const [cellsClicked, setCellsClicked] = React.useState(0);
  const [isGameOver, setIsGameOver] = React.useState(false);

  const startGame = (event) => {
    setIsTimer(true);
    setNewGame(true);
    setSafeCells(allCells.length - bombsNumber);
    createBombsArr(gameField, event);

    allCells.forEach((el) => {
      el.removeEventListener('click', startGame);
    });
  };

  React.useEffect(() => {
    setGameField(getInitialGameField().gameField);
    setBombsNumber(getInitialGameField().bombsNumber);
  }, [newGame]);

  React.useEffect(() => {
    setAllCells(Array.from(document.querySelectorAll('.cell')));
  }, [gameField]);

  React.useEffect(() => {
    allCells.forEach((el) => {
      el.addEventListener('click', startGame);
    });
  }, [allCells]);

  const recursionClick = (cell, i, j) => {
    cell.id = `${i}_${j}`;
    const iList = [i - 1, i, i + 1];
    const jList = [j - 1, j, j + 1];

    iList.forEach((x) => {
      jList.forEach((y) => {
        setTimeout(() => {
          if (document.getElementById(`${x}_${y}`)) {
            document.getElementById(`${x}_${y}`).click();
          }
        }, 0);
      });
    });
  };

  const winCheck = (openCells) => {
    if (openCells >= safeCells) {
      setButton('😎');
      setIsGameOver(true);
    }
  };

  const cellClick = (cell, index, value) => {
    const openCells = cellsClicked + 1;
    setCellsClicked(openCells);

    winCheck(openCells);
    if (value === '' && cell.id === `${index.i}_${index.j}`) {
      recursionClick(cell, index.i, index.j);
      winCheck(openCells);
    } else if (value === '*') {
      setButton('😵');
      setIsGameOver(true);
      setIsTimer(false);
      return true;
    }

    return false;
  };

  const resetGame = () => {
    setNewGame(false);
    setIsTimer(false);
    setButton('🙂');
    setIsGameOver(false);
    setCellsClicked(0);
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
          cellClick={cellClick}
          onMouseDown={() => {
            setButton('😮');
          }}
          onMouseUp={() => {
            setButton('🙂');
          }}
          isGameOver={isGameOver}
          newGame={newGame}
        />
      </section>
    </main>
  );
}

export default App;
