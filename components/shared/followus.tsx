import React, { useEffect, useState } from "react";
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

const CustomMarquee: React.FC<MarqueeProps> = ({
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
};

const Follow = () => {
  const [reverse, setReverse] = useState<boolean>(false);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

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

  const handleMouseOver = (index: number) => {
    setHoverIndex(index);
  };

  const handleMouseOut = () => {
    setHoverIndex(null);
  };

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
          fontFamily='__Poppins_12f463'
        />
      </div>
      <div className="grpmark">
        <h4 className="heeed">Our Socials and Contacts</h4>
        <div className="marqgrp">
          <ul>
            <li
              data-cursor-text="."
              onMouseEnter={() => handleMouseOver(0)}
              onMouseLeave={handleMouseOut}
            >
              {hoverIndex === 0 ? (
                <CustomMarquee
                  background="white"
                  color="black"
                  borderTop="1px solid white"
                  text="InstaGram ←"
                  height="100px"
                  fontWeight="500"
                  fontSize="40px"
                  duration={40000}
                  fontStyle="normal"
                  type={true}
                  fontFamily=""
                />
              ) : (
                <span className="word">Instagram</span>
              )}
            </li>
            <li
              data-cursor-text="."
              onMouseEnter={() => handleMouseOver(1)}
              onMouseLeave={handleMouseOut}
            >
              {hoverIndex === 1 ? (
                <CustomMarquee
                  background="white"
                  color="black"
                  borderTop="1px solid white"
                  text="Twitter &rarr;"
                  height="100px"
                  fontWeight="500"
                  fontSize="40px"
                  duration={40000}
                  fontStyle="normal"
                  type={false}
                  fontFamily=""
                />
              ) : (
                <span className="word">Twitter</span>
              )}
            </li>
            <li
              data-cursor-text="."
              onMouseEnter={() => handleMouseOver(2)}
              onMouseLeave={handleMouseOut}
              style={{ borderBottom: "1px solid white" }}
            >
              {hoverIndex === 2 ? (
                <CustomMarquee
                  background="white"
                  color="black"
                  borderTop="1px solid white"
                  text="Facebook ←"
                  height="100px"
                  fontWeight="500"
                  fontSize="40px"
                  duration={40000}
                  fontStyle="normal"
                  fontFamily=""
                  type={true}
                />
              ) : (
                <span className="word">Facebook</span>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Follow;
