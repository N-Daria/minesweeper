/* eslint-disable no-debugger */
import './Cell.css';
import React from 'react';

export default React.memo(({ startGame, onMouseDown, onMouseUp }) => {
  const handleClick = (event) => {
    console.log(event);
    startGame();
  };

  const markCell = (event) => {
    event.preventDefault();

    if (event.target.textContent === '') {
      event.target.textContent = '🚩';
    } else if (event.target.textContent === '🚩') {
      event.target.textContent = '❓';
    } else if (event.target.textContent === '❓') {
      event.target.textContent = '';
    }
  };

  return (
    <li className="cell">
      <button
        type="button"
        className="cell__button"
        aria-label="chose the cell"
        onClick={handleClick}
        onContextMenu={markCell}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
      />
    </li>
  );
});
