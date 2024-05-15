import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { Application } from "@splinetool/runtime";
import { MouseParallax } from "react-just-parallax";
import Spline from "@splinetool/react-spline";

const staggerVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.1,
      ease: "easeInOut",
    },
  },
  hidden: {
    opacity: 0,
    y: 100,
  },
};

const charVariants = {
  hidden: {
    opacity: 0,
    y: 100,
    clipPath: "inset(0px 10px 100% 0px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0px -10px 0px 0px)",
  },
};

const HeroSection = () => {
  const controls = useAnimation();
  const splineRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const restartAnimation = async () => {
      await controls.start("hidden");
      await controls.start("visible");
    };

    restartAnimation();
    if (splineRef.current) {
      splineRef.current.style.overflow = "hidden";
    }
  }, []);

  return (
    <section
      style={{ position: "relative", zIndex: "5", background: "#09090b" }}
      className="relative flex w-full items-start justify-center h-[100vh] py-12 px-16"
    >
      <motion.div
        style={{ marginLeft: "10%" }}
        className="lm flex flex-col absolute w-full items-start overflow-hidden justify-center h-[100vh] py-12 px-16"
        initial={{
          opacity: 0,
        }}
        animate={controls}
        variants={staggerVariants}
      >
        <h2 className="text-6xl tracking-tight leading-none bg-clip-text bg-gradient-to-r from-[#ffffff] to-[rgba(255,255,255,0.42)] lg:text-8xl md:text-8xl sm:text-7xl transition-all">
          <motion.span variants={charVariants}>We</motion.span>{" "}
          <motion.span variants={charVariants}>are</motion.span>
          <motion.video
            src="/compresed1.mp4"
            width={130}
            height={200}
            className="rounded-full mx-9 inline-block"
            autoPlay
            muted
            loop
          />
          <br />
          <motion.span className="font-light italic" variants={charVariants}>
            Artisan's
          </motion.span>{" "}
          <motion.span variants={charVariants}>Bijou</motion.span>
          <br />
        </h2>

        <motion.p className="text-xl italic w-1/3 text-white/60 py-4">
          We are the top notch Jewelry store we Shop with us right now
        </motion.p>
        <motion.button
          className="px-14 py-6 text-xl border-2 rounded-full redbtn"
          data-cursor-text="SHOP NOW"
        >
          <span className="spani">SHOP NOW</span>
        </motion.button>
      </motion.div>

      <div
        className="w-full absolute flex items-center justify-end px-32 right-0 h-full"
        style={{ padding: "0% 15%" }}
      >
        <motion.div
          className="relative"
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.4,
              delay: 0.3,
              staggerChildren: 0.1,
              ease: "easeInOut",
            },
          }}
        >
          <div
            className="splin flex flex-col items-center justify-center"
            ref={splineRef}
            style={{ width: "400px", background: "#09090b", height: "475px" }}
          >
            <MouseParallax strength={0.05}>
              <Spline
                style={{ cursor: "grab", height: "100%", width: "100%" }}
                scene="https://prod.spline.design/fvdHJDjBhCOpPZUU/scene.splinecode"
              />
            </MouseParallax>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
