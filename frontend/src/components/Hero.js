import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Award, Users, Building2 } from 'lucide-react';
import { carouselData } from '../mockData';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselData.length) % carouselData.length);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Carousel Container */}
      <div className="relative h-full">
        {carouselData.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-900/80 via-red-900/60 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-3xl">
                  <div className="space-y-6 text-white">
                    <div className={`transform transition-all duration-1000 delay-300 ${
                      index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}>
                      <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                        <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                          {slide.title}
                        </span>
                      </h1>
                    </div>
                    
                    <div className={`transform transition-all duration-1000 delay-500 ${
                      index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}>
                      <h2 className="text-xl md:text-2xl font-semibold text-orange-200 mb-4">
                        {slide.subtitle}
                      </h2>
                      <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl">
                        {slide.description}
                      </p>
                    </div>

                    <div className={`flex flex-wrap gap-4 transform transition-all duration-1000 delay-700 ${
                      index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}>
                      <button className="group px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-full hover:from-amber-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-xl flex items-center space-x-2">
                        <span>View Projects</span>
                        <Building2 className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                      </button>
                      
                      <button className="group px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 backdrop-blur-sm">
                        <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                        <span>Watch Video</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full hover:bg-white/20 transform hover:scale-110 transition-all duration-300"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full hover:bg-white/20 transform hover:scale-110 transition-all duration-300"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {carouselData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-gradient-to-r from-amber-400 to-orange-500 scale-125 shadow-lg'
                : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-r from-orange-600/90 to-red-700/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center text-white">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Award className="w-6 h-6 text-amber-400" />
                <span className="text-3xl font-bold">15+</span>
              </div>
              <p className="text-orange-100">Years Experience</p>
            </div>
            
            <div className="text-center text-white">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Building2 className="w-6 h-6 text-amber-400" />
                <span className="text-3xl font-bold">500+</span>
              </div>
              <p className="text-orange-100">Projects Completed</p>
            </div>
            
            <div className="text-center text-white">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Users className="w-6 h-6 text-amber-400" />
                <span className="text-3xl font-bold">450+</span>
              </div>
              <p className="text-orange-100">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;