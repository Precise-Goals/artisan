'use client'
import React, { useEffect, useRef } from "react";
import { Application } from "@splinetool/runtime";
import Products from "./imagescraousel";

const BelowHeadervid = () => {

  useEffect(() => {
    const canvas = document.getElementById("canvas3d") as HTMLCanvasElement;
    if (canvas) {
      const app = new Application(canvas);
      app.load("https://prod.spline.design/yZtJE5r5WjlegIoE/scene.splinecode");
    } else {
      console.error("Canvas element not found");
    }
  }, []); 

  return (
    <section>
      <div
        className="w-full bg-zinc-950 h-[100%] z-10"
        style={{ background: "transparent", width: "100vw", height: "100vh" }}
      >
        <video
          className="viddd"
          src="/compresed1.mp4"
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
