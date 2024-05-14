import React, { useEffect, useState, useCallback, memo } from "react";
import Marquee from "react-easy-marquee";

declare global {
  interface Window {
    lastScrollY: number;
  }
}

interface MarqueeProps {
  text: string;
  duration?: number;
  background?: string;
  height?: string;
  reverse?: boolean;
  fontSize?: string;
  fontStyle?: string;
  fontWeight?: string;
  fontFamily?: string;
  wordSpacing?: string;
  borderTop?: string;
  color?: string;
  type?: boolean;
}

const CustomMarquee: React.FC<MarqueeProps> = memo(
  ({
    text,
    duration = 20000,
    background = "#09090b",
    height = "200px",
    fontSize = "140px",
    fontStyle = "italic",
    color = "#ffffff",
    fontWeight = "300",
    fontFamily = "auto",
    wordSpacing = "4rem",
    type = false,
    borderTop = "1px solid white",
  }) => {
    return (
      <Marquee
        duration={duration}
        background={background}
        height={height}
        reverse={type}
      >
        <span
          className="bachaa"
          style={{
            fontSize,
            position: "relative",
            zIndex: "8909",
            height,
            background,
            fontStyle,
            wordSpacing,
            fontWeight,
            color,
            borderTop,
            whiteSpace: "nowrap",
            fontFamily,
          }}
        >
          {text}ㅤ{text}ㅤ{text}ㅤ{text}ㅤ{text}ㅤ
        </span>
      </Marquee>
    );
  }
);

const Follow: React.FC = () => {
  const [reverse, setReverse] = useState<boolean>(false);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const lastScrollY = window.lastScrollY || 0;
      setReverse(window.scrollY <= lastScrollY);
      window.lastScrollY = window.scrollY;
    };

    const throttledHandleScroll = throttle(handleScroll, 100);

    window.addEventListener("scroll", throttledHandleScroll);
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, []);

  const handleMouseOver = useCallback((index: number) => {
    setHoverIndex(index);
  }, []);

  const handleMouseOut = useCallback(() => {
    setHoverIndex(null);
  }, []);

  return (
    <div className="followwrapper">
      <div className="marqueeee">
        <CustomMarquee
          fontWeight="300"
          text="FOLLOW-US"
          borderTop="none"
          height="180px"
          duration={50000}
          fontSize="80px"
          fontStyle="italic"
          fontFamily="__Poppins_12f463"
        />
      </div>
      <div className="grpmark">
        <h4 className="heeed">Our Socials and Contacts</h4>
        <div className="marqgrp">
          <ul>
            {["Instagram", "Twitter", "Facebook"].map((social, index) => (
              <li
                key={social}
                data-cursor-text="."
                onMouseEnter={() => handleMouseOver(index)}
                onMouseLeave={handleMouseOut}
                style={index === 2 ? { borderBottom: "1px solid white" } : {}}
              >
                {hoverIndex === index ? (
                  <CustomMarquee
                    background="white"
                    color="black"
                    borderTop="1px solid white"
                    text={`${social} ${index % 2 === 0 ? "←" : "→"}`}
                    height="100px"
                    fontWeight="500"
                    fontSize="40px"
                    duration={40000}
                    fontStyle="normal"
                    type={index % 2 === 0}
                    fontFamily=""
                  />
                ) : (
                  <span className="word">{social}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const throttle = (func: Function, limit: number) => {
  let lastFunc: NodeJS.Timeout;
  let lastRan: number;
  return function (...args: any[]) {
    if (!lastRan) {
      func(...args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function () {
        if (Date.now() - lastRan >= limit) {
          func(...args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
};

export default Follow;
