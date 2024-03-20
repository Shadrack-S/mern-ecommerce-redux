import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    "https://img.freepik.com/free-psd/fashion-sales-banner-template_23-2148979206.jpg",
    "https://img.freepik.com/free-vector/hand-drawn-fashion-collection-twitch-banner_23-2149985384.jpg",
    "https://img.freepik.com/free-vector/hand-drawn-fashion-collection-facebook-cover_23-2149985388.jpg",
    "https://img.freepik.com/free-psd/banner-template-new-year-celebration_23-2148760430.jpg",
    "https://img.freepik.com/free-vector/flat-design-minimal-boutique-facebook-cover_23-2149326664.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevSlide = () => {
    setActiveIndex(activeIndex === 0 ? images.length - 1 : activeIndex - 1);
  };

  const goToNextSlide = () => {
    setActiveIndex(activeIndex === images.length - 1 ? 0 : activeIndex + 1);
  };

  return (
    <div className=" relative container mx-auto w-full h-96 overflow-hidden hidden md:block">
      <FiChevronLeft 
        onClick={goToPrevSlide} 
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-3xl cursor-pointer" 
        aria-label="Previous Slide" 
      />
      {images.map((image, index) => (
        <div 
          key={index} 
          className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
        >
          <img
            className="w-full h-full object-fill"
            src={image}
            alt={`Slide ${index + 1}`}
          />
          {index === activeIndex && (
            <div className="absolute bottom-0 left-0 w-full h-full " />
          )}
        </div>
      ))}
      <FiChevronRight 
        onClick={goToNextSlide} 
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-3xl cursor-pointer" 
        aria-label="Next Slide" 
      />
    </div>
  );
};

export default Slider;
