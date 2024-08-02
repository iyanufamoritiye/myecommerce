import React, { useEffect, useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const CustomCounter = ({ initialCount = 1, min = 1, max = 99, onChange }) => {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    if (onChange) {
      onChange(count);
    }
  }, [count, onChange]);

  const handleIncrement = () => {
    if (count < max) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > min) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex items-center gap-4 w-16   border-2 border-gray-400   rounded-md p-2">
      <span className="text-base font-normal">
        {String(count).padStart(2, "0")}
      </span>
      <div className="flex flex-col">
        <button onClick={handleIncrement} className=" focus:outline-none">
          <FaChevronUp className="h-3 w-3" />
        </button>
        <button onClick={handleDecrement} className="      focus:outline-none">
          <FaChevronDown className="h-3 w-3" />
        </button>
      </div>
    </div>
  );
};

export default CustomCounter;
