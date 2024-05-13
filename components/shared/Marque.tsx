"use client";
import React, { useState, useEffect } from "react";
import Marquee from "react-easy-marquee";

declare global {
  interface Window {
    lastScrollY: number;
  }
}

interface ExampleProps {
  text: string;
}

const Example: React.FC<ExampleProps> = ({ text }) => {
  const [reverse, setReverse] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolling down
      if (window.scrollY > (window.lastScrollY || 0)) {
        setReverse(false);
      } else {
        // Scrolling up
        setReverse(true);
      }
      // Update last scroll position
      window.lastScrollY = window.scrollY;
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Remove scroll event listener on component unmount
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Marquee
        duration={30000}
        background="#000000"
        height="65px"
        reverse={true}
      >
        <span
          className="bacha"
          style={{
            fontSize: "60px",
            position: "relative",
            zIndex: "8909",
            background: "#09090b",
            fontStyle: "italic",
            wordSpacing: "4rem",
            fontFamily: "auto",
            whiteSpace: "nowrap",
          }}
        >
          ㅤ{text}ㅤ{text}ㅤ{text}ㅤ{text}ㅤ{text}ㅤ{text}ㅤ{text}
        </span>
      </Marquee>
    </div>
  );
};

export default Example;
