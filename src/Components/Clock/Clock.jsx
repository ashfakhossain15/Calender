import  { useState, useEffect } from 'react';


const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTimeUnit = (unit) => {
    return unit < 10 ? `0${unit}` : unit.toString();
  };

  const hours = formatTimeUnit(time.getHours());
  const minutes = formatTimeUnit(time.getMinutes());
  const seconds = formatTimeUnit(time.getSeconds());

  return (
    <div className="flex">
      <div className="clock-digit">
        {hours[0]}
        <div className="flip">{hours[1]}</div>
      </div>
      <div className="clock-digit">
        {minutes[0]}
        <div className="flip">{minutes[1]}</div>
      </div>
      <div className="clock-digit">
        {seconds[0]}
        <div className="flip">{seconds[1]}</div>
      </div>
    </div>
  );
};

export default Clock;
