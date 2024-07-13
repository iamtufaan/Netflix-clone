import React from "react";
import youtube_icon from "../assets/youtube_icon.png";
import twitter_icon from "../assets/twitter_icon.png";
import instagram_icon from "../assets/instagram_icon.png";
import facebook_icon from "../assets/facebook_icon.png";

function Footer() {
	return (
		<div className="footer px-[4%] py-8 max-w-[1000px] my-0 mx-auto">
			<div className="footer-icons  flex gap-5 my-10 mx-0">
				<img src={youtube_icon} alt="youtube_icon" className=" md:w-8 w-6 cursor-pointer" />
				<img src={instagram_icon} alt="instagram_icon" className=" md:w-8 w-6 cursor-pointer" />
				<img src={facebook_icon} alt="facebook_icon" className=" md:w-8 w-6 cursor-pointer" />
				<img src={twitter_icon} alt="twitter_icon" className=" md:w-8 w-6 cursor-pointer" />
			</div>
            <ul className=" grid md:grid-cols-[auto_auto_auto_auto] grid-cols-[auto,auto] md:gap-4 gap-2 mb-7">
                <li className=" capitalize">Audio Description</li>
                <li className=" capitalize">Help center</li>
                <li className=" capitalize">gift cards</li>
                <li className=" capitalize">media center</li>
                <li className=" capitalize">investor relations</li>
                <li className=" capitalize">jobs</li>
                <li className=" capitalize">terms of use</li>
                <li className=" capitalize">privacy</li>
                <li className=" capitalize">legal notices</li>
                <li className=" capitalize">cookie preferences</li>
                <li className=" capitalize">corporate informations</li>
                <li className=" capitalize">contact us</li>
            </ul>
            <p className=" text-gray-600 text-xs">©️ 1997-2024 Netflix, Inc.  </p>
		</div>
	);
}

export default Footer;
