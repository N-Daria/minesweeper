import { configuration } from '../../utils/utils';

class InitialGameField {
  constructor(config) {
    this.rows = config.field.row;
    this.columns = config.field.columns;
    this.gameField = [];
    this.bombsNumber = Math.floor(
      Math.random() * (config.bombs.max + 1 - config.bombs.min) + config.bombs.min,
    );
  }

  createGameField = () => {
    for (let i = 0; i < this.rows; i++) {
      const innerArr = [];
      for (let j = 0; j < this.columns; j++) {
        innerArr.push('');
      }
      this.gameField.push(innerArr);
    }

    this._createBombsArr();
  };

  _createBombsArr = () => {
    for (let i = 0; i <= this.bombsNumber; i++) {
      const x = Math.floor(Math.random() * this.rows);
      const y = Math.floor(Math.random() * this.columns);

      if (!this.gameField[x][y]) {
        this.gameField[x][y] = '*';
      }
    }
  };
}

export default new InitialGameField(configuration);
