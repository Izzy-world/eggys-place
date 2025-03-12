import React, { useState } from "react";
import eggysLogo from "../assets/eggys-logo.svg";
import locationImg from "../assets/location-img.svg";
import dropDownImg from "../assets/Drop-down-img.svg";
import cartImg from "../assets/cart-img.svg";
import loginImg from "../assets/login-img.svg";
import searchIcon from "../assets/search-iconn.svg";
import { Link } from "react-router-dom";
import AuthModal from "../auth/AuthModal"; // Import the modal

const Navbar = ({ cart = [] }) => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <>
      <header className="bg-[#100101]">
        <nav className="container mx-auto px-[20px] md:px-[80px] py-[10px] lg:px-[130px] lg:py-[16px] flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <div>
            <Link to="/">
              <img src={eggysLogo} alt="eggys-logo" className="w-full h-auto" />
            </Link>

            </div>
            
            <img
              src={locationImg}
              alt="location-img"
              className="w-full h-auto hidden md:block"
            />

            <h4 className="text-[#F0F0F0] text-[20px] font-[500] hidden md:block">
              Location
            </h4>

            <img className="md:hidden" src={searchIcon} alt="search-icon" />
          </div>

          <div>
            <form>
              <input
                type="text"
                placeholder="Search"
                className="hidden lg:block w-[300px] h-[56px] rounded-[32px] outline-none bg-[#F0F0F0] placeholder:text-[#100101] ps-[30px] border font-[400] text-[20px]"
              />
            </form>
          </div>

          <div className="flex gap-4 items-center">
            <ul className="flex gap-4">
              <li className="flex items-center h-[56px] py-[15px] px-[20px] bg-[#B67B0F] rounded-[32px]">
                <img src={cartImg} alt="cart-img" />
                <Link className="px-2 text-[#FBFBFB] font-[500] text-[20px]" to="cart">
                  <span className="hidden lg:inline-block">Cart</span> {cart?.length || 0}
                </Link>
              </li>
              <li
                className="flex items-center w-[56px] md:w-[124px] h-[56px] py-[15px] px-[20px] bg-[#F0F0F0] rounded-[32px] cursor-pointer"
                onClick={() => setIsAuthModalOpen(true)}
              >
                <img src={loginImg} alt="login-img" />
                <span className="ps-2 text-[#100101] font-[500] text-[20px] hidden md:inline">
                  Login
                </span>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Auth Modal */}
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </>
  );
};

export default Navbar;
