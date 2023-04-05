import React from 'react';
import { configuration } from '../../utils/utils';
import NumberBox from '../NumberBox/NumberBox';

export default function Timer({ isTimer, resetedTimer }) {
  const [elapsedTime, setElapsedTime] = React.useState(0);
  const [timerId, setTimerId] = React.useState(null);

  React.useEffect(() => {
    if (elapsedTime > configuration.gameTime) {
      alert('Время вышло!');
    }
  }, [elapsedTime]);

  React.useEffect(() => {
    if (!isTimer) {
      clearInterval(timerId);
    } else {
      const gameStartTime = Date.now();

      const timerFunction = setInterval(() => {
        const timePassed = Date.now() - gameStartTime + elapsedTime;
        const currentSeconds = parseInt(timePassed / 1000, 10);
        setElapsedTime(currentSeconds);
      }, 1000);

      setTimerId(timerFunction);
    }
  }, [isTimer]);

  React.useEffect(() => {
    setElapsedTime(0);
  }, [resetedTimer]);

  return <NumberBox number={elapsedTime} />;
}
