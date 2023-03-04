import { configuration } from '../../utils/utils';

const bombsNumber = Math.floor(
  Math.random() * (configuration.bombs.max + 1 - configuration.bombs.min) + configuration.bombs.min,
);
const { rows } = configuration.field;
const { columns } = configuration.field;

const createAdjacentCell = (x, y, gameField) => {
  const iList = [x - 1, x, x + 1];
  const jList = [y - 1, y, y + 1];

  iList.forEach((a) => {
    if (gameField[a]) {
      jList.forEach((b) => {
        if (gameField[a][b] !== undefined && gameField[a][b] !== '*') {
          gameField[a][b] = Number(gameField[a][b]) + 1;
        }
      });
    }
  });
};

const createBombsArr = (gameField) => {
  for (let i = 0; i <= bombsNumber; i++) {
    const x = Math.floor(Math.random() * rows);
    const y = Math.floor(Math.random() * columns);

    if (!gameField[x][y]) {
      gameField[x][y] = '*';
      createAdjacentCell(x, y, gameField);
    }
  }
  return gameField;
};

const createGameField = () => {
  const gameField = [];
  for (let i = 0; i < rows; i++) {
    const innerArr = [];
    for (let j = 0; j < columns; j++) {
      innerArr.push('');
    }
    gameField.push(innerArr);
  }
  return createBombsArr(gameField);
};

const getInitialGameField = () => {
  const gameField = createGameField();
  return gameField;
};

export default getInitialGameField;