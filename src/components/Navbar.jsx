import React, { useEffect, useRef } from "react";
import logo from "../assets/logo.png";
import search_icon from "../assets/search_icon.svg";
import bell_icon from "../assets/bell_icon.svg";
import profile_img from "../assets/profile_img.png";
import caret_icon from "../assets/caret_icon.svg";
import { Link } from "react-router-dom";
import { logout } from "../firebase";

function Navbar() {
    const navRef = useRef();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 80) {
                navRef.current.classList.add('bg-[#141414]');
                navRef.current.classList.remove('bg-[0]');
            } else {
                navRef.current.classList.add('bg-[0]');
                navRef.current.classList.remove('bg-[#141414]');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div ref={navRef} className="w-full flex items-center justify-between md:px-[6%] px-[2%] md:py-5 py-3  fixed text-sm text-[#e5e5e5]  z-[1] transition-colors duration-300">
            <div className="left flex gap-10 items-center">
                <img src={logo} alt="netflix_logo" className="w-20" />
                <ul className="md:flex gap-5 hidden ">
                    <Link to={'/'} className="cursor-pointer">Home</Link>
                    <li className="cursor-pointer">TV Shows</li>
                    <li className="cursor-pointer">Movies</li>
                    <li className="cursor-pointer">New & Popular</li>
                    <li className="cursor-pointer">My List</li>
                    <li className="cursor-pointer">Browse by Languages</li>
                </ul>
            </div>
            <div className="right flex items-center gap-5">
                <img
                    src={search_icon}
                    alt="search_icon"
                    className="w-5 cursor-pointer"
                />
                <p>Children</p>
                <img
                    src={bell_icon}
                    alt="bell_icon"
                    className="w-5 cursor-pointer"
                />
                <div className="profile flex items-center gap-2 cursor-pointer relative group">
                    <img
                        src={profile_img}
                        alt="profile_img"
                        className="w-8 rounded-s-md"
                    />
                    <img
                        src={caret_icon}
                        alt="caret_icon"
                        className="w-3"
                    />
                    <div className="dropdown absolute w-44 right-0 top-8  bg-[#191919] py-5 px-6 rounded-sm underline z-[1] hidden group-hover:block">
                        <p
                        onClick={()=>{logout()}}
                        className="text-sm cursor-pointer">Sign Out of Netflix</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
