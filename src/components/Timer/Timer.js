import React from 'react';

export default function Timer() {
  const [timer, setSeconds] = React.useState(0);

  if (timer > 2400) {
    alert('Время вышло!');
  }

  React.useEffect(() => {
    const timerId = setInterval(() => {
      setSeconds(timer + 1);
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  });

  return (
    <p className="game__timer">
      {
        // eslint-disable-next-line no-nested-ternary
        timer < 10 ? `000${timer}` : timer < 100 ? `00${timer}` : timer < 1000 ? `0${timer}` : timer
      }
    </p>
  );
}
