import React, { useState } from "react";
import { allSections } from "../BurgerSession.js";

const BurgerSession = () => {
  const [selected, setSelected] = useState(0);

  return (
    <main className="bg-[#2F2F2F] py-7 md:block  hidden px-4">
      <section className="container mx-auto px-[20px] md:px-[40px] lg:px-[80px] xl:px-[130px] py-[10px] md:py-[14px] lg:py-[16px] flex justify-between items-center rounded-full">
        <div className="bg-[#1a1a1a] p-7 rounded-full w-full">
          <div className="carousel w-full">
            {allSections.map((allSection) => (
              <div key={allSection._id} className="carousel-item w-1/2 sm:w-1/3 md:w-1/6 flex justify-center">
                <div
                  className={`flex flex-col items-center cursor-pointer transition duration-300 ${
                    selected === allSection._id ? "opacity-100" : "opacity-40"
                  }`}
                  onClick={() => setSelected(allSection._id)}
                >
                  <img
                    src={allSection.image}
                    alt={allSection.title}
                    className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                  />
                  <span
                    className={`mt-2 text-xs sm:text-sm ${
                      selected === allSection._id ? "text-white font-bold" : "text-gray-400"
                    }`}
                  >
                    {allSection.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default BurgerSession;
