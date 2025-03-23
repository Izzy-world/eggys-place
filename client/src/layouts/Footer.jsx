import React from 'react'
import eggysLogo from "../assets/eggys-logo.svg"
import twitter from "../assets/twitter icon.svg"
import facebook from "../assets/facebook icon.svg"
import twitterIcon2 from "../assets/twitter icon-2.svg"
import instagram from "../assets/instagram-icon.svg"
import youtube from "../assets/youtube-icon.svg" 

const Footer = () => {
  return (
    <>
      <footer className="bg-[#100101] text-white py-6 h-full">
        <div className="container mx-auto flex flex-col items-center text-center md:flex-row md:justify-between px-[20px] md:px-[80px] lg:px-[130px]">
          {/* Logo */}
          <img src={eggysLogo} alt="eggys-Logo" className="h-12 bg-[#100101]" />

          {/* Navigation Links */}
          <nav className="flex space-x-6 text-sm mt-4 md:mt-0">
            <a href="#about" className="hover:underline">About</a>
            <a href="#products" className="hover:underline">Products</a>
            <a href="#support" className="hover:underline">Support</a>
            <a href="#terms" className="hover:underline">Terms & Conditions</a>
          </nav>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:opacity-80">
              <img src={twitter} alt="X" className="h-5" />
            </a>
            <a href="#" className="hover:opacity-80">
              <img src={facebook} alt="Facebook" className="h-5" />
            </a>
            <a href="#" className="hover:opacity-80">
              <img src={twitterIcon2} alt="Twitter" className="h-5" />
            </a>
            <a href="#" className="hover:opacity-80">
              <img src={instagram} alt="Instagram" className="h-5" />
            </a>
            <a href="#" className="hover:opacity-80">
              <img src={youtube} alt="YouTube" className="h-5" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white-600 w-full mt-6"></div>

        {/* Copyright & Privacy Policy - Moved into a flex container */}
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 mt-2 px-[20px] md:px-[80px] lg:px-[130px]">
          {/* Left - Copyright Text (aligned with logo) */}
          <p className="text-left md:text-left w-full md:w-auto">TM & Copyright 2025 Eggys Corporation. All Rights Reserved.</p>
          
          {/* Right - Privacy Policy */}
          <a href="#" className="text-right hover:underline mt-2 md:mt-0 w-full md:w-auto">Privacy Policy</a>
        </div>
      </footer>
    </>
  )
}

export default Footer
