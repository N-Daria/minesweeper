import './Cell.css';
import React from 'react';

export default React.memo(() => {
  // const changeCardLike = () => {};

  return (
    <li className="cell">
      <button type="button" className="cell__button" aria-label="chose the cell" />
    </li>
  );
});
