import './Cell.css';
import React from 'react';

export default React.memo(
  ({ value, newGame, cellClick, onMouseDown, onMouseUp, index, id, isGameOver }) => {
    const [isBlocked, setIsBlocked] = React.useState(false);
    const element = document.getElementById(id);

    const addStyle = (el, style) => {
      el.classList.add(`${style}`);
    };

    const resetCellsStyles = () => {
      element.textContent = '';
      element.disabled = false;
      Array.from(element.classList).forEach((el) => {
        return element.classList.remove(el);
      });
      addStyle(element, 'cell__button');
    };

    if (!newGame && element) {
      resetCellsStyles();
    }

    if (isGameOver && value === '*') {
      element.textContent = value;
      addStyle(element, 'cell__button_opened');
      addStyle(element, 'cell__button_bomb');
    }

    const handleClick = ({ target }) => {
      if (!isBlocked) {
        const isFailed = cellClick(target, index, value);
        target.textContent = value;
        addStyle(target, 'cell__button_opened');
        target.disabled = true;
        addStyle(target, `cell__button_${target.textContent}`);

        if (isFailed) {
          addStyle(target, 'cell__button_failed');
          addStyle(target, 'cell__button_bomb');
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
  },
);
