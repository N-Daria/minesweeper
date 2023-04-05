import React from 'react';
import './NumberBox.css';

export default function NumberBox({ number }) {
  const [renderedNumber, setRenderedNumber] = React.useState({
    thous: null,
    hun: null,
    dec: null,
    num: null,
  });

  React.useEffect(() => {
    if (number || number === 0) {
      const dividedNumber = number.toString().split('').reverse();
      setRenderedNumber({
        thous: dividedNumber[3] || null,
        hun: dividedNumber[2] || null,
        dec: dividedNumber[1] || null,
        num: dividedNumber[0],
      });
    }
  }, [number]);

  return (
    <div className="number-box">
      <p className="number-box__text">
        <span className="number-box__char">{renderedNumber.thous}</span>
        <span className="number-box__char">{renderedNumber.hun}</span>
        <span className="number-box__char">{renderedNumber.dec}</span>
        <span className="number-box__char">{renderedNumber.num}</span>
      </p>
    </div>
  );
}
