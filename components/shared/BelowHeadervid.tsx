'use client'
import React, { useEffect, useRef } from "react";
import { Application } from "@splinetool/runtime";
import Products from "./imagescraousel";

const BelowHeadervid = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const canvas = document.getElementById("canvas3d") as HTMLCanvasElement;
    if (canvas) {
      const app = new Application(canvas);
      app.load("https://prod.spline.design/yZtJE5r5WjlegIoE/scene.splinecode");
    } else {
      console.error("Canvas element not found");
    }
  }, []); // Empty dependency array ensures this effect runs only once after the initial render

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        const video = videoRef.current;
        const parentDiv = video.parentElement;
        if (parentDiv) {
          const parentRect = parentDiv.getBoundingClientRect();
          const videoRect = video.getBoundingClientRect();
          const halfParentHeight = parentRect.top + parentRect.height / 2;
          const halfVideoHeight = videoRect.height / 2;
          if (window.scrollY > halfParentHeight - halfVideoHeight) {
            if (video.paused) {
              video.play();
            }
          } else {
            if (!video.paused) {
              video.pause();
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section>
      <div
        className="w-full bg-zinc-950 h-[100%] z-10"
        style={{ background: "transparent", width: "100vw", height: "100vh" }}
      >
        <video
          ref={videoRef}
          className="viddd"
          src="/compresed.mp4"
          autoPlay
          loop
          muted
        />
      </div>
      <div className="howework" style={{ position: "relative", zIndex: "5" }}>
        <div className="r-howwe">
          <canvas id="canvas3d"></canvas>
        </div>
        <div className="l-howee">
          <p>
            Artisan is a well-known jewelry brand in the USA. Popular in the business industry with 60 years of experience.
          </p>
          <button
            className="px-9 py-4 text-xl border-2 rounded-full redbtn"
            style={{ marginTop: "3rem" }}
          >
            <span className="spani" data-cursor-text="Work">
              How we work
            </span>
          </button>
        </div>
      </div>
      <Products />
    </section>
  );
};

export default BelowHeadervid;
