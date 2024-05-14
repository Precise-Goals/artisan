"use client";
import Navbar from "@/components/shared/Navbar";
import Cursor from "@/components/shared/Cursor";
import HeroSection from "@/components/shared/Hero";
import BelowHeadervid from "@/components/shared/BelowHeadervid";
import { InfiniteMovingCardsDemo } from "@/components/shared/reviews";
import Footer from "@/components/shared/Footer";

export default function Home() {
	return (
		<>
			<Cursor />
			<main className={`bg-zinc-950 text-white flex flex-col mx-auto`}>
				<Navbar />
				<HeroSection />
				<BelowHeadervid />
				{/* <InfiniteMovingCardsDemo/> */}
				<Footer/>
			</main>
		</>
	);
}
