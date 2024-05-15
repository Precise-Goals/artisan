"use client";
import Navbar from "@/components/shared/Navbar";
import Cursor from "@/components/shared/Cursor";
import HeroSection from "@/components/shared/Hero";
import BelowHeadervid from "@/components/shared/BelowHeadervid";
import { InfiniteMovingCardsDemo } from "@/components/shared/reviews";
import Footer from "@/components/shared/Footer";
import Meta from "@/components/shared/head";

export default function Home() {
  return (
    <>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <Cursor />
      <main className={`bg-zinc-950 text-white flex flex-col mx-auto`}>
        <Meta
          title="Artisans Bijou"
          imageUrl="https://i.ibb.co/m8WQhyT/Screenshot-2024-05-15-130238.png"
          description="Artisan is a well-known jewelry brand in the USA. Popular in the business industry with 60 years of experience."
        />
        <Navbar />
        <HeroSection />
        <BelowHeadervid />
        <InfiniteMovingCardsDemo />
        <Footer />
      </main>
    </>
  );
}
