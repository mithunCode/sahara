import React, { useEffect, useRef, useState } from "react";
import "../app/globals.css";

const CircleCounter = ({ targetNumber, pType }: any) => {
  const [number, setNumber] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && number < targetNumber) {
      const timer = setTimeout(() => setNumber(number + 1), 30); // Update every 20ms
      return () => clearTimeout(timer); // Clean up the timer
    }
  }, [number, targetNumber, isVisible]);

  return (
    <div ref={counterRef} className="flex justify-center items-center h-full">
      <div className="circle-counter flex flex-col items-center justify-between">
        <span className="number-counter flex flex-row justify-center items-center gap-2">
          {number}+
        </span>
        <span className="text-xl">{pType}</span>
      </div>
    </div>
  );
};

export default CircleCounter;
