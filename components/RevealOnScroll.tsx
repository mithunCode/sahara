import React, { useEffect, useRef, useState } from "react";
import "../app/globals.css"; // Make sure to import your CSS file

const RevealOnScroll = ({ children }: any) => {
  const [isVisible, setIsVisible] = useState(false);
  const revealRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    if (revealRef.current) {
      observer.observe(revealRef.current);
    }

    return () => {
      if (revealRef.current) {
        observer.unobserve(revealRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`reveal-section ${isVisible ? "visible" : ""}`}
      ref={revealRef}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;
