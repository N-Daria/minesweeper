import React from 'react';
import Cell from '../Cell/Cell';
import './GameField.css';

export default React.memo(({ gameField, startGame, onMouseDown, onMouseUp }) => {
  // this.hasBomb = false;
  // this.checked = false;
  // this.opened = false;

  // constructor(config) {
  //   this.rows = config.field.row;
  //   this.columns = config.field.columns;
  //   this.gameField = [];
  //   this.bombsNumber = Math.floor(
  //     Math.random() * (config.bombs.max + 1 - config.bombs.min) + config.bombs.min,
  //   );
  // }

  // const createGameField = () => {

  // };

  // {
  //   this.state.field.map(function(row){
  //     return row.map(function (cell) {
  //       return (
  //         <Cell
  //         row={cell.row}
  //           col={cell.col}
  //           hasBomb={cell.hasBomb}
  //           bombNbr={cell.bombNbr}
  //           key={cell.row + "-" + cell.col}
  //           checked={cell.checked}
  //           opened={cell.opened}
  //           clickLeft={this.cellLeftClicked}
  //           clickRight={this.cellRightClicked}
  //         />
  //       )
  //     }, this);
  //   }, this)

  return (
    <ul className="game-field__list">
      {gameField.map((row, i) => {
        return row.map((cell, j) => {
          return (
            <Cell
              cell={cell}
              // eslint-disable-next-line react/no-array-index-key
              key={`${i}-${j}`}
              startGame={startGame}
              onMouseDown={onMouseDown}
              onMouseUp={onMouseUp}
            />
          );
        });
      })}
    </ul>
  );
});
