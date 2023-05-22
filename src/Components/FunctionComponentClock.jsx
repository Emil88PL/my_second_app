import React, { useState, useEffect } from 'react';

const FunctionComponentClock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [updateCount, setUpdateCount] = useState(0);

  useEffect(() => {
    const tictock = setInterval(tick, 1000);

    return () => {
      clearInterval(tictock);
      console.log(`Final update count: ${updateCount}`);
    };
  }, [updateCount]);

  const tick = () => {
    setTime(new Date().toLocaleTimeString());
    setUpdateCount(prevCount => prevCount + 1);
  };

  return (
    <div className="flex-clock" id="classClock">
      <h1>Clock made using a Function component</h1>
      <h2>The time is {time}</h2>
    </div>
  );
};

export default FunctionComponentClock;
