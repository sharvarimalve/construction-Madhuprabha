import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { carouselData } from '../mockData';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselData.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselData.length) % carouselData.length);
  };

  return (
    <section className="relative h-[40vh] sm:h-[55vh] md:h-[70vh] lg:h-screen overflow-hidden pt-16 sm:pt-20">
      
      {/* Carousel Container */}
      <div className="relative h-full z-10">
        {carouselData.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-fill lg:object-fill"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 z-30 group p-4 bg-slate-700/50 backdrop-blur-sm border border-slate-600/30 text-white rounded-full hover:bg-white/20 hover:border-white hover:text-white transform hover:scale-110 transition-all duration-500"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      <button
        onClick={nextSlide}
        className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 z-30 group p-4 bg-slate-700/50 backdrop-blur-sm border border-slate-600/30 text-white rounded-full hover:bg-white/20 hover:border-white hover:text-white transform hover:scale-110 transition-all duration-500"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Slide Indicators - Responsive Bottom Spacing */}
      <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 lg:bottom-12 left-1/2 -translate-x-1/2 z-30 flex space-x-4">
        {carouselData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`group relative transition-all duration-500 ${
              index === currentSlide ? 'scale-125' : 'hover:scale-110'
            }`}
          >
            <div
              className={`w-4 h-4 rounded-full transition-all duration-500 ${
                index === currentSlide
                  ? 'bg-white shadow-lg'
                  : 'bg-white/40 group-hover:bg-white/70'
              }`}
            ></div>

            {index === currentSlide && (
              <div className="absolute inset-0 bg-white rounded-full blur animate-pulse"></div>
            )}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
