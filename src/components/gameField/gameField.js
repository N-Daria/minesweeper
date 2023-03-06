import React from 'react';
import Cell from '../Cell/Cell';
import './GameField.css';

export default React.memo(({ gameField, cellClick, onMouseDown, onMouseUp, isGameOver }) => {
  return (
    <table>
      <tbody className="game-field__list">
        {gameField.map((row, j) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <tr key={j}>
              {row.map((cell, i) => {
                return (
                  <Cell
                    value={cell}
                    // eslint-disable-next-line react/no-array-index-key
                    key={i}
                    index={{ i, j }}
                    cellClick={cellClick}
                    onMouseDown={onMouseDown}
                    onMouseUp={onMouseUp}
                    id={`${i}_${j}`}
                    isGameOver={isGameOver}
                  />
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
});
