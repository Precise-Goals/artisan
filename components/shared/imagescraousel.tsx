"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import "aos/dist/aos.css";
import AOS from "aos";

const Products = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // animate only once
    });
  }, []);

  return (
    <div
      className="products"
      style={{ padding: "5% 6%", position: "relative", background: "#09090b" }}
    >
      {/* <video src="/prylx.mp4" autoPlay loop muted></video> */}
      <h1
        style={{
          position: "relative",
          zIndex: "4",
          width: "100%",
          lineHeight:"3rem",
          textAlign: "center",
        }}
      >
        <span
          style={{
            fontSize: "60px",
            letterSpacing: "0.01rem",
            fontStyle: "italic",
          }}
        >
          BEST SELLING
        </span>
        <br />{" "}
        <p
          style={{
            fontSize: "75px",
            fontStretch: "extra-condensed",
            fontStyle: "italic",
            fontWeight: "200",
          }}
        >
          PRODUCTS
        </p>
      </h1>
      <div
        className="imgcontainer"
        style={{ position: "relative", zIndex: "4" }}
      >
        <div className="r">
          {[1, 4, 5, 2, 3].map((num) => (
            <LazyLoadedImage key={`img-${num}`} num={num} />
          ))}
        </div>
        <div className="l">
          {[4, 5, 2, 3].map((num) => (
            <LazyLoadedImage key={`img-${num}`} num={num} />
          ))}
        </div>
      </div>
    </div>
  );
};

const LazyLoadedImage = ({ num }: { num: number }) => {
  const imageSrc = `/heroimg${num}.jpg`;

  return (
    <Image
      src={imageSrc}
      className={`reveal item img-${num}`}
      width={400}
      height={500}
      alt="subimg"
      data-cursor-text=" "
      data-aos="fade-up"
    />
  );
};

export default Products;
