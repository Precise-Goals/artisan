import { MouseParallax } from "react-just-parallax";
import Spline from "@splinetool/react-spline";

const HeroSection = () => {
  return (
    <section className="relative flex items-start justify-center h-screen py-12 px-16" style={{ background: "#09090b", zIndex: "5" }}>
      <div className="lm flex flex-col absolute w-full items-start overflow-hidden justify-center h-full py-12 px-16" style={{ marginLeft: "10%" }}>
        <h2 className="text-6xl tracking-tight leading-none bg-clip-text bg-gradient-to-r from-[#ffffff] to-[rgba(255,255,255,0.42)] lg:text-8xl md:text-8xl sm:text-7xl transition-all">
          <span>We</span>{" "}
          <span>are</span>
          <span>
            <video src="/compresed1.mp4" width={130} height={200} className="rounded-full mx-9 inline-block" autoPlay muted loop />
          </span>
          <br />
          <span className="font-light italic">Artisan's</span>{" "}
          <span>Bijou</span>
          <br />
        </h2>
        <p className="text-xl italic w-1/3 text-white/60 py-4">
          We are the top-notch Jewelry store. Shop with us right now.
        </p>
        <button className="px-14 py-6 text-xl border-2 rounded-full redbtn" data-cursor-text="SHOP NOW">
          <span className="spani">SHOP NOW</span>
        </button>
      </div>
      <div className="w-full absolute flex items-center justify-end px-32 right-0 h-full" style={{ padding: "0% 15%" }}>
        <div className="relative" style={{ opacity: 1, scale: 1 }}>
          <div className="splin flex flex-col items-center justify-center" style={{ width: "400px", background: "#09090b", height: "475px" }}>
            <MouseParallax strength={0.05}>
              <Spline style={{ cursor: "grab", height: "100%", width: "100%" }} scene="https://prod.spline.design/fvdHJDjBhCOpPZUU/scene.splinecode" />
            </MouseParallax>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
