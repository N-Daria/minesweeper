import React from 'react';
import './App.css';
import getInitialGameField from './components/InitialGameField/InitialGameField';
import GameField from './components/GameField/GameField';

function App() {
  const [gameField, setGameField] = React.useState([]);

  React.useEffect(() => {
    setGameField(getInitialGameField());
  }, []);

  return (
    <main className="body">
      <section className="game">
        <article className="game__info">
          <p className="game__timer" />
          <button className="game__button" aria-label="reset the field" type="button">
            &#128578;
          </button>
          <p className="game__bombsNumber" />
        </article>

        <GameField gameField={gameField} />
      </section>
    </main>
  );
}

export default App;
