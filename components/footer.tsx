import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
    return (
        <>
            <div className="bg-black-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-15">
                <div className="p-5 ">
                    <ul>
                        <p className="text-white-800 font-bold text-3xl pb-6">
                            Perfect Match
                        </p>
                        <p className="text-pink-500 font-bold text-m pb-6">
                            Cupid Just Got Smarter
                        </p>
                        <div className="flex gap-6 pb-5">
                            <FaInstagram className="text-2xl cursor-pointer hover:text-pink-500" />
                            <FaLinkedin className="text-2xl cursor-pointer hover:text-pink-500" />
                        </div>
                    </ul>
                </div>
                <div className="p-5">
                    <ul>
                        <p className="text-white-800 font-bold text-2xl pb-4">About</p>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-pink-500 cursor-pointer">
                            About Us
                        </li>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-pink-500 cursor-pointer">
                            Data Privacy
                        </li>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-pink-500 cursor-pointer">

                        </li>

                    </ul>
                </div>
                <div className="p-5">
                    <ul>
                        <p className="text-white-800 font-bold text-2xl pb-4">Past Years</p>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-pink-500 cursor-pointer">
                            2020 Statistics
                        </li>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-pink-500 cursor-pointer">
                            2021 Statistics
                        </li>

                    </ul>
                </div>
                <div className="p-5">
                    <ul>
                        <p className="text-white-800 font-bold text-2xl pb-4">Contact</p>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-pink-500 cursor-pointer">
                            cornell.perfectmatch@gmail.com
                        </li>

                    </ul>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center text-center  p-5 bg-black-50">
                <h1 className=" text-white-800 font-semibold">
                    © 2019-2022 Perfect Match, All rights reserved | Build with ❤ in Ithaca, NY

                </h1>
            </div>
        </>
    );
}

export default Footer;