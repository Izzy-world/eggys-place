import React from 'react';

const Hero = () => {
  return (
    <main 
      className="bg-[url('/hero-img-svg.svg')] bg-no-repeat bg-cover bg-center"
    >
      <div className="relative w-full h-screen flex items-center justify-center px-6">
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white max-w-2xl">
          <h1 className="text-4xl md:text-5xl text-[#FBFBFB] font-RedHat font-[400]">
            The <span className="text-[#B67B0F] font-[500] font-Rammetto">ZING</span> in every bite
          </h1>
          <p className="mt-4 text-lg md:text-xl text-[#FBFBFB] font-RedHat">
            Savor the flavor! Explore our delicious menu and order now for a taste sensation!
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4">
            <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-500 transition">
              Order Now!
            </button>
            <button className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition">
              View Menu
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
