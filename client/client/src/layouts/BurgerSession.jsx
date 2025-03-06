import React, { useState } from 'react';
import { allSections } from "../BurgerSession.js";

const BurgerSession = () => {
  const [selected, setSelected] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Open modal and set selected image index
  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <main className="bg-[#2F2F2F] py-7 px-4">
      <section className="container mx-auto border px-[20px] md:px-[80px] py-[10px] lg:px-[130px] lg:py-[16px] flex flex-col sm:flex-row justify-between items-center">

        {/* Mobile Carousel - Shows 3 Items Per Slide */}
        <div className="sm:hidden mt-6 w-full">
          <div className="carousel w-full rounded-lg p-4 bg-[#1a1a1a] flex justify-center">
            {allSections.map((allSection, index) => (
              <div 
                key={allSection._id} 
                className="carousel-item w-1/3 flex flex-col items-center cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
                onClick={() => openModal(index)}
              >
                <img
                  src={allSection.image}
                  alt={allSection.title}
                  className="w-14 h-14 object-contain"
                />
                <span className="mt-2 text-white font-bold text-xs">{allSection.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Grid Layout for Tablets & Desktops */}
        <div className="hidden sm:grid bg-[#1a1a1a] p-7 md:rounded-full grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 justify-center w-full">
          {allSections.map((allSection, index) => (
            <div
              key={allSection._id}
              className={`flex flex-col items-center cursor-pointer transition duration-300 ${
                selected === allSection._id ? "opacity-100" : "opacity-40"
              } hover:opacity-100`}
              onClick={() => openModal(index)}
            >
              <img
                src={allSection.image}
                alt={allSection.title}
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain transition-transform duration-300 ease-in-out transform hover:scale-110"
              />
              <span
                className={`mt-2 text-xs sm:text-sm ${
                  selected === allSection._id ? "text-white font-bold" : "text-gray-400"
                } hover:text-white`}
              >
                {allSection.title}
              </span>
            </div>
          ))}
        </div>

        {/* Modal Popup with Carousel */}
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-[#1a1a1a] rounded-lg p-6 text-center relative">
              {/* Close Button */}
              <button className="absolute top-2 right-2 text-white text-xl" onClick={closeModal}>
                ✖
              </button>

              {/* DaisyUI Carousel */}
              <div className="carousel w-80">
                {allSections.map((allSection, index) => (
                  <div
                    key={allSection._id}
                    className={`carousel-item w-full flex justify-center ${
                      index === currentIndex ? "block" : "hidden"
                    }`}
                  >
                    <img src={allSection.image} alt={allSection.title} className="w-40 h-40 object-contain" />
                  </div>
                ))}
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-4">
                <button
                  className="bg-gray-700 text-white px-4 py-2 rounded"
                  onClick={() => setCurrentIndex((currentIndex - 1 + allSections.length) % allSections.length)}
                >
                  ◀ Prev
                </button>
                <button
                  className="bg-gray-700 text-white px-4 py-2 rounded"
                  onClick={() => setCurrentIndex((currentIndex + 1) % allSections.length)}
                >
                  Next ▶
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default BurgerSession;
