import React, { useEffect, useState } from "react";

const Clock2 = () => {
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
    <div className="flex items-center justify-start   gap-4 mt-8 xs:justify-between xs:gap-2  ">
      <div
        className="text-center flex flex-col items-center py-1 xs:px-4  
       gap-0 h-16 w-16 justify-center rounded-full bg-white"
      >
        <span className="block text-gray-950  font-bold">
          {String(timeLeft.days).padStart(2, "0")}
        </span>
        <span className="block text-gray-950 text-sm">Days</span>
      </div>

      <div
        className="text-center flex flex-col items-center py-1 xs:px-4  
       gap-0 h-16 w-16 justify-center rounded-full bg-white"
      >
        <span className="block text-gray-950  font-bold">
          {String(timeLeft.hours).padStart(2, "0")}
        </span>
        <span className="block text-gray-950 text-sm">Hours</span>
      </div>

      <div
        className="text-center flex flex-col items-center py-1  xs:px-4 
       gap-0 h-16 w-16 justify-center rounded-full bg-white"
      >
        <span className="block text-gray-950   font-bold">
          {String(timeLeft.minutes).padStart(2, "0")}
        </span>
        <span className="block text-gray-950 text-sm">Minutes</span>
      </div>

      <div
        className="text-center flex flex-col items-center py-1  xs:px-4
       gap-0 h-16 w-16 justify-center rounded-full bg-white"
      >
        <span className="block text-gray-950   font-bold">
          {String(timeLeft.seconds).padStart(2, "0")}
        </span>
        <span className="block text-gray-950 text-sm">Seconds</span>
      </div>
    </div>
  );
};

export default Clock2;
