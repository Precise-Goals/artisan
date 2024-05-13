"use client";
import Navbar from "@/components/shared/Navbar";
import Cursor from "@/components/shared/Cursor";
import HeroSection from "@/components/shared/Hero";
import BelowHeadervid from "@/components/shared/BelowHeadervid";
import { useEffect, useState } from "react";
import { InfiniteMovingCardsDemo } from "@/components/shared/reviews";
import Footer from "@/components/shared/Footer";
import Example from "@/components/shared/Marque";

export default function Home() {
	return (
		<>
			<Cursor />
			<main className={`bg-zinc-950 text-white flex flex-col mx-auto`}>
				<Navbar />
				<HeroSection />
				<BelowHeadervid />
				<Example text="Artisans"/>
				<InfiniteMovingCardsDemo/>
				<Footer/>
			</main>
		</>
	);
}
