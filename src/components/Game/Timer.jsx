import { useEffect, useState } from "react";

const Timer = ({ time, onEndTime, onTimeUpdate }) => {
  const [remainingTime, setRemainingTime] = useState(time);

  useEffect(() => {
    let timer;

    if (remainingTime > 0) {
      timer = setTimeout(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    if (remainingTime === 0) {
      onEndTime();
    }

    onTimeUpdate(remainingTime);

    return () => clearTimeout(timer);
  }, [remainingTime]);

  return (
    <p>
      {Math.floor(remainingTime / 60)}:
      {remainingTime % 60 < 10 ? `0${remainingTime % 60}` : remainingTime % 60}
    </p>
  );
};

export default Timer;
