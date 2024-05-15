"use client";
import React, { useState, useCallback } from "react";
import styles from "./Follow.module.css";

const Follow: React.FC = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const handleMouseOver = useCallback((index: number) => {
    setHoverIndex(index);
  }, []);

  const handleMouseOut = useCallback(() => {
    setHoverIndex(null);
  }, []);
  return (
    <div className={styles.followWrapper}>
      <div className={styles.marqueeContainer}>
        <div className={styles.marquee}>
          <span>FOLLOW-US</span>
          <span>FOLLOW-US</span>
          <span>FOLLOW-US</span>
          <span>FOLLOW-US</span>
        </div>
      </div>
      <div className={styles.groupMark}>
        <h4>Our Socials and Contacts</h4>
        <div className={styles.marqueeGroup}>
          <ul>
            {["Instagram", "Twitter", "Facebook"].map((social, index) => (
              <li
                key={social}
                onMouseEnter={() => handleMouseOver(index)}
                onMouseLeave={handleMouseOut}
                className={hoverIndex === index ? "" : styles.active}
              >
                {hoverIndex === index ? (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                    className={`${styles.marqueeHover} ${
                      index === 1 ? styles.reverse : ""
                    }`}
                  >
                    <span>{`${social} ${
                      index === 1 ? "ㅤ→ㅤ" : "ㅤ←ㅤ"
                    }`}</span>
                    <span>{`${social} ${
                      index === 1 ? "ㅤ→ㅤ" : "ㅤ←ㅤ"
                    }`}</span>
                    <span>{`${social} ${
                      index === 1 ? "ㅤ→ㅤ" : "ㅤ←ㅤ"
                    }`}</span>
                    <span>{`${social} ${
                      index === 1 ? "ㅤ→ㅤ" : "ㅤ←ㅤ"
                    }`}</span>
                    <span>{`${social} ${
                      index === 1 ? "ㅤ→ㅤ" : "ㅤ←ㅤ"
                    }`}</span>
                    <span>{`${social} ${
                      index === 1 ? "ㅤ→ㅤ" : "ㅤ←ㅤ"
                    }`}</span>
                    <span>{`${social} ${
                      index === 1 ? "ㅤ→ㅤ" : "ㅤ←ㅤ"
                    }`}</span>
                    <span>{`${social} ${
                      index === 1 ? "ㅤ→ㅤ" : "ㅤ←ㅤ"
                    }`}</span>
                    <span>{`${social} ${
                      index === 1 ? "ㅤ→ㅤ" : "ㅤ←ㅤ"
                    }`}</span>
                    <span>{`${social} ${
                      index === 1 ? "ㅤ→ㅤ" : "ㅤ←ㅤ"
                    }`}</span>
                    <span>{`${social} ${
                      index === 1 ? "ㅤ→ㅤ" : "ㅤ←ㅤ"
                    }`}</span>
                    <span>{`${social} ${
                      index === 1 ? "ㅤ→ㅤ" : "ㅤ←ㅤ"
                    }`}</span>
                  </div>
                ) : (
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {social}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Follow;
