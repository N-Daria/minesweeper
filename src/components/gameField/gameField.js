import React from 'react';
import Cell from '../Cell/Cell';
import './GameField.css';

const GameField = React.memo(
  ({ gameField, isStylesReset, cellClick, onMouseDown, onMouseUp, isGameOver }) => {
    return (
      <table className="game-field__table">
        <tbody className="game-field__list">
          {gameField.map((row, i) => {
            return (
              // eslint-disable-next-line react/no-array-index-key
              <tr key={i}>
                {row.map((cell, j) => {
                  return (
                    <Cell
                      value={cell}
                      // eslint-disable-next-line react/no-array-index-key
                      key={j}
                      index={{ i, j }}
                      cellClick={cellClick}
                      onMouseDown={onMouseDown}
                      onMouseUp={onMouseUp}
                      id={`${i}_${j}`}
                      isGameOver={isGameOver}
                      isStylesReset={isStylesReset}
                    />
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  },
);

export default GameField;
