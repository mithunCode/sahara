import React, { useEffect, useState } from "react";
import "../app/globals.css";
import RevealOnScroll from "./RevealOnScroll";
const CircleCounter = ({ targetNumber, pType }: any) => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    if (number < targetNumber) {
      const timer = setTimeout(() => setNumber(number + 1), 20); // Update every 20ms
      return () => clearTimeout(timer); // Clean up the timer
    }
  }, [number, targetNumber]);

  return (
    <RevealOnScroll>
      <div className="flex justify-center items-center h-full">
        <div className="circle-counter flex flex-col items-center justify-between">
          <span className="number-counter flex flex-row justify-center items-center gap-2">
            {number} +
          </span>
          <span>{pType}</span>
        </div>
      </div>
    </RevealOnScroll>
  );
};

export default CircleCounter;
