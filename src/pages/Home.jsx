import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import hero_banner from "../assets/hero_banner.jpg";
import hero_title from "../assets/hero_title.png";
import play_icon from "../assets/play_icon.png";
import info_icon from "../assets/info_icon.png";
import TitleCards from "../components/TitleCards";

function Home() {
	return (
		<div className="min-h-screen">
			<Navbar />
			<div className="relative md:w-full w-96 ">
				<img
					src={hero_banner}
					alt="hero_banner"
					className="absolute inset-0 lg:w-full w-96 object-cover object-center"
					style={{
						maskImage: "linear-gradient(to right, transparent, black 75%)",
						WebkitMaskImage: "linear-gradient(to right, transparent, black 75%)"
					}}
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75"></div>
				<div className="hero-caption absolute bottom-0 w-full p-2 md:pl-16 lg:pl-24 text-white">
					<img
						src={hero_title}
						alt="hero_title"
						className="w-full md:w-2/5 lg:max-w-xs mb-2 lg:mb-8"
					/>
					<p className="w-full text-sm md:text-lg mb-5 md:w-4/5">
						Discovering his ties to a secret ancient order, a young man living in
						modern Istanbul embarks on a quest to save the city from an immortal
						enemy.
					</p>
					<div className="hero-btn flex gap-3 mb-6 lg:mb-12">
						<button className="flex gap-2 items-center border-0 outline-none px-5 py-2 text-lg font-semibold bg-white rounded-md cursor-pointer text-black hover:bg-[#ffffffbf]">
							<img src={play_icon} alt="play_icon" className="w-6" />Play
						</button>
						<button className="flex gap-2 items-center border-0 outline-none px-5 py-2 text-lg font-semibold bg-[#6d6d6eb3] rounded-md cursor-pointer text-white hover:bg-[#6d6d6e66]">
							<img src={info_icon} alt="info_icon" className="w-6" />More Info
						</button>
					</div>
					<div className="hero-card hidden lg:block">
						<TitleCards />
					</div>
				</div>
			</div>
			<div className="more-cards p-2 md:pl-16 lg:pl-24 pb-6">
				<TitleCards title="Blockbuster Movie" category="top_rated" />
				<TitleCards title="Only on Netflix" category="popular" />
				<TitleCards title="Upcoming" category="upcoming" />
				<TitleCards title="Top Picks for You" category="now_playing" />
			</div>
			<Footer />
		</div>
	);
}

export default Home;
