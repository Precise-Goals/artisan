"use client";
// Sidebar.js
import React, { useEffect } from "react";
import { gsap } from "gsap";
import Link from "next/link";

const Sidebar = ({ isOpen, onClose }: any) => {
  const sidebarRef = React.useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(sidebarRef.current, {
        duration: 0.2,
        x: "0%",
        ease: "power4.inOut",
        stagger: .1,
      });
    } else {
      gsap.to(sidebarRef.current, {
        duration: 0.2,
        x: "100%",
        ease: "power4.in",
        stagger: .1,
      });
    }
  }, [isOpen]);

  return (
    <div ref={sidebarRef} className={`sidebar ${isOpen ? "open" : ""}`}>
      <div
        className="content"
        style={{ width: " 100%", height: '100vh', background: "white", padding: " 42% 10% 50%" }}
      >
        <div
          className="close-btn h-10 w-10"
          data-cursor-icon="arrow-left"
          onClick={onClose}
        >
          <span className="rotate-[45deg] origin-center absolute"></span>
          <span className="rotate-[-45deg] origin-center absolute"></span>
        </div>
        <nav className="flex text-4xl text-black font-semibold py-4 flex-col items-start justify-center gap-8">
          <Link data-cursor-text="Home" onClick={onClose} href="/">
            HOME
          </Link>
          <Link data-cursor-text="About" onClick={onClose} href="/">
            ABOUT
          </Link>
          <Link data-cursor-text="Store" onClick={onClose} href="/">
            STORE
          </Link>
          <Link data-cursor-text="Contact" onClick={onClose} href="/">
            CONTACT
          </Link>
          <Link data-cursor-text="Blog" onClick={onClose} href="/">
            BLOG
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
