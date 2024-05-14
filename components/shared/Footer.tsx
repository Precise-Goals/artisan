import React from "react";
import Image from "next/image";
import Link from "next/link";
import Follow from "./followus";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="Foot" style={{ position: "relative", zIndex: 5, background: "#09090b" }}>
        <div className="tup">
          <ul>
            <li>
              <Link href="/" passHref>
                < span data-cursor-text="Home">Home</ span>
              </Link>
            </li>
            <li>
              <Link href="/" passHref>
                < span data-cursor-text="About">About</ span>
              </Link>
            </li>
            <li>
              <Link href="/" passHref>
                < span data-cursor-text="Store">Store</ span>
              </Link>
            </li>
            <li>
              <Image src="/logo.svg" alt="logo" width={500} height={300} />
            </li>
            <li>
              <Link href="/" passHref>
                < span data-cursor-text="Blog">Blog</ span>
              </Link>
            </li>
            <li>
              <Link href="/" passHref>
                < span data-cursor-text="Contact">Contact</ span>
              </Link>
            </li>
            <li>
              <Link href="/" passHref>
                < span data-cursor-text="Help">Help</ span>
              </Link>
            </li>
          </ul>
        </div>
        {/* <Follow /> */}
        <div className="butt" style={{ position: "relative", zIndex: 2, overflow: "hidden" }}>
          <video
            style={{
              position: "absolute",
              top: 0,
              width: "100%",
              objectFit: "cover",
              left: 0,
              filter: "blur(1px) brightness(0.5)",
              zIndex: 1,
            }}
            autoPlay
            muted
            loop
            src="/foot1.mp4"
          ></video>
          <div className="wrap" style={{ position: "relative", width: "100%", zIndex: 6, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <h1 style={{ fontSize: "80px", lineHeight: "100%", textAlign: "center", margin: "3% 0 1%" }}>Have <br /> <span style={{ fontSize: "70px", fontStyle: "italic", textAlign: "center", fontWeight: 200 }}>any Idea ?</span></h1>
            <button className="px-14 py-6 text-xl border-2 rounded-full redbtn" style={{ marginBottom: "8%" }} data-cursor-text="Tell">
              <Link href="/" passHref>
                < span className="spani" style={{display:"flex",alignItems:"center",justifyContent:"center", fontSize: "70px" }}>TELL US</ span>
              </Link>
            </button>
            <div className="bottom" style={{ fontSize: "20px", display: "flex", flexDirection: "row", width: "100%", gap: "1rem", alignItems: "center", justifyContent: "flex-start" }}>
              <button data-cursor-text="con" className="px-9 py-3 text-xl border-2 rounded-full redbtn"><span className="spani">Info@Artisans.com</span></button>
              <button data-cursor-text="con" className="px-9 py-3 text-xl border-2 rounded-full redbtn"><span className="spani">+1 abc efg ijk</span></button>
              <p style={{ color: "white", marginLeft: "50%" }}>Privacy Policy</p>
            </div>
          </div>
        </div>
        <p style={{ fontSize: "15px", padding: "1% 1%", textAlign: "center" }}>Developed by CyproStudios - 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
