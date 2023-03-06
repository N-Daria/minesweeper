import './Cell.css';
import React from 'react';

export default React.memo(({ value, cellClick, onMouseDown, onMouseUp, index, id, isGameOver }) => {
  const [isBlocked, setIsBlocked] = React.useState(false);

  if (isGameOver && value === '*') {
    document.getElementById(id).textContent = value;
  }

  const handleClick = ({ target }) => {
    if (!isBlocked) {
      const isFailed = cellClick(target, index, value);
      target.textContent = value;
      target.classList.add('cell__button_opened');
      target.disabled = true;

      if (isFailed) {
        target.classList.add('cell__button_failed');
      }
    }
  };

  const markCell = (event) => {
    event.preventDefault();

    if (isGameOver) {
      return;
    }

    if (event.target.textContent === '') {
      setIsBlocked(true);
      event.target.disabled = true;
      event.target.textContent = '🚩';
    } else if (event.target.textContent === '🚩') {
      event.target.disabled = true;
      setIsBlocked(true);
      event.target.textContent = '❓';
    } else if (event.target.textContent === '❓') {
      event.target.textContent = '';
      event.target.disabled = false;
    }
  };

  return (
    <td className="cell">
      <button
        type="button"
        className="cell__button"
        aria-label="chose the cell"
        onClick={handleClick}
        onContextMenu={markCell}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        id={id}
        disabled={isGameOver}
      />
    </td>
  );
});
