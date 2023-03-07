import React from 'react';

export default function Timer({ isTimer }) {
  const [seconds, setSeconds] = React.useState(0);
  let timerId;
  const [lastTimeValue, setLastTimeValue] = React.useState(0);

  if (seconds > 2400) {
    alert('Время вышло!');
  }

  const updateTime = () => {
    timerId = setInterval(() => {
      setSeconds(seconds + 1);
      setLastTimeValue(seconds + 1);
    }, 1000);
  };

  // eslint-disable-next-line consistent-return
  React.useEffect(() => {
    if (!isTimer) {
      setSeconds(0);
    } else {
      updateTime();
      return () => {
        clearInterval(timerId);
      };
    }
  });

  return <p className="game__timer">{lastTimeValue}</p>;
}
