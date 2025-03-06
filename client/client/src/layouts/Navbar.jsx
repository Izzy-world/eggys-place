import React from 'react'
import eggysLogo from "../assets/eggys-logo.svg";
import locationImg from "../assets/location-img.svg"
import dropDownImg from "../assets/Drop-down-img.svg"
import cartImg from "../assets/cart-img.svg"
import loginImg from "../assets/login-img.svg"
  import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <>
    <header className=' bg-[#100101]'>
    <nav className='container mx-auto border px-[20px] md:px-[80px] py-[10px] lg:px-[130px] lg:py-[16px] flex justify-between items-center'>
        <div className='flex gap-4 items-center'>
            <img src={eggysLogo} alt="eggys-logo" className='w-full h-auto' />
            <img src={locationImg} alt="location-img" className='w-full h-auto' />
            <h4 className='text-[#F0F0F0] text-[20px] font-[500] hidden md:block'>location</h4> {/* Hidden on mobile */}
              <img src={dropDownImg} alt="drop-down-img" />
              
        </div>
        <div>
            <form>
                <input type="text" placeholder='search' className='hidden lg:block w-[300px] h-[56px] rounded-[32px] outline-none bg-[#F0F0F0] placeholder:text-[#100101] ps-[30px] border font-[400] text-[20px]' />
            </form>
        </div>
        <div className='flex gap-4 items-center'>
            <h2 className='font-[500] text-[20px] text-[#FBFBFB] hidden lg:block'>All Products</h2>
            <ul className='flex gap-4'>
            <li className="flex items-center h-[56px] py-[15px] px-[20px] bg-[#B67B0F] rounded-[32px]">
                <img src={cartImg} alt="cart-img" /> <Link className="px-2 text-[#FBFBFB] font[500] text-[20px]"> <span className="hidden lg:inline-block">Cart</span> 0 </Link>
              </li>
                <li className='flex items-center w-[56px] md:w-[124px] h-[56px] py-[15px] px-[20px] bg-[#F0F0F0] rounded-[32px]'>
                    <img src={loginImg} alt="login-img" />
                    <Link className='ps-2 text-[#100101] font-[500] text-[20px] hidden md:inline'> login </Link> {/* Hidden on mobile */}
                </li>
            </ul>
        </div>
    </nav>
</header>


    </>
  )
}

export default Navbar