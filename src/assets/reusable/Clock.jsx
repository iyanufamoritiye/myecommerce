import React, { useEffect, useState } from "react";

const Clock = () => {
  const initialTimeLeft = {
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  };

  const [timeLeft, setTimeLeft] = useState(initialTimeLeft);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeLeft((prevState) => {
        let { days, hours, minutes, seconds } = prevState;

        if (seconds > 0) {
          seconds -= 1;
        } else {
          if (minutes > 0) {
            seconds = 59;
            minutes -= 1;
          } else {
            if (hours > 0) {
              minutes = 59;
              seconds = 59;
              hours -= 1;
            } else {
              if (days > 0) {
                hours = 23;
                minutes = 59;
                seconds = 59;
                days -= 1;
              } else {
                clearInterval(timerId);
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="flex items-center justify-center space-x-4 p-4 ">
      <div className="text-center">
        <span className="block text-gray-950 text-sm">Days</span>
        <span className="block text-gray-950 text-2xl font-bold">
          {String(timeLeft.days).padStart(2, "0")}
        </span>
      </div>
      <span className="block text-red-600 text-2xl">:</span>
      <div className="text-center">
        <span className="block text-gray-950 text-sm">Hours</span>
        <span className="block text-gray-950 text-2xl font-bold">
          {String(timeLeft.hours).padStart(2, "0")}
        </span>
      </div>
      <span className="block text-red-600 text-2xl">:</span>
      <div className="text-center">
        <span className="block text-gray-950 text-sm">Minutes</span>
        <span className="block text-gray-950 text-2xl font-bold">
          {String(timeLeft.minutes).padStart(2, "0")}
        </span>
      </div>
      <span className="block text-red-600 text-2xl">:</span>
      <div className="text-center">
        <span className="block text-gray-950 text-sm">Seconds</span>
    
          <span className="block text-gray-950 text-2xl font-bold">
            {String(timeLeft.seconds).padStart(2, "0")}
          </span>
          
         
      </div>
    </div>
  );
};

export default Clock;
