import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Award, Users, Building2, Sparkles } from 'lucide-react';
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
    <section className="relative h-screen overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700"></div>
        {/* Floating animated shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-amber-400/20 to-yellow-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-orange-400/20 to-amber-500/20 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-40 w-40 h-40 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Carousel Container */}
      <div className="relative h-full z-10">
        {carouselData.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            {/* Background Image with advanced overlay */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              
              {/* Multiple gradient overlays for depth */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/70 to-slate-900/40"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-800/30"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-transparent to-yellow-900/20"></div>
            </div>

            {/* Content with advanced animations */}
            <div className="relative z-20 h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-4xl">
                  <div className="space-y-8 text-white">
                    {/* Animated badge */}
                    <div className={`transform transition-all duration-1000 delay-200 ${
                      index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}>
                      <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 backdrop-blur-sm border border-amber-400/30 rounded-full">
                        <Sparkles className="w-5 h-5 text-amber-400 animate-pulse" />
                        <span className="text-amber-200 font-semibold text-sm uppercase tracking-wider">Premium Construction</span>
                      </div>
                    </div>
                    
                    {/* Main title with gradient text */}
                    <div className={`transform transition-all duration-1000 delay-400 ${
                      index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}>
                      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                        <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent animate-pulse">
                          {slide.title.split(' ').slice(0, 2).join(' ')}
                        </span>
                        <br />
                        <span className="text-slate-100">
                          {slide.title.split(' ').slice(2).join(' ')}
                        </span>
                      </h1>
                    </div>
                    
                    {/* Subtitle with typewriter effect */}
                    <div className={`transform transition-all duration-1000 delay-600 ${
                      index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}>
                      <h2 className="text-xl md:text-3xl font-semibold text-amber-200 mb-6">
                        {slide.subtitle}
                      </h2>
                      <p className="text-lg md:text-2xl text-slate-300 leading-relaxed max-w-3xl">
                        {slide.description}
                      </p>
                    </div>

                    {/* Advanced CTA buttons */}
                    <div className={`flex flex-wrap gap-6 transform transition-all duration-1000 delay-800 ${
                      index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}>
                      <button className="group relative px-10 py-5 font-bold rounded-full overflow-hidden transition-all duration-500 transform hover:scale-105">
                        {/* Animated gradient background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 transition-all duration-500 group-hover:from-yellow-400 group-hover:via-amber-500 group-hover:to-orange-600"></div>
                        
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        
                        {/* Glow effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full blur opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
                        
                        <div className="relative z-10 flex items-center space-x-3 text-slate-900">
                          <span className="text-lg">View Projects</span>
                          <Building2 className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                        </div>
                      </button>
                      
                      <button className="group relative px-10 py-5 font-bold rounded-full transition-all duration-500 transform hover:scale-105 border-2 border-slate-400/50 hover:border-amber-400/80 backdrop-blur-sm">
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-800/50 to-slate-700/50 group-hover:from-amber-500/20 group-hover:to-yellow-500/20 rounded-full transition-all duration-500"></div>
                        
                        <div className="relative z-10 flex items-center space-x-3 text-slate-200 group-hover:text-amber-200">
                          <Play className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                          <span className="text-lg">Watch Video</span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Advanced Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-30 group p-4 bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600/30 text-slate-200 rounded-full hover:from-amber-500/20 hover:to-yellow-500/20 hover:border-amber-400/50 hover:text-amber-300 transform hover:scale-110 transition-all duration-500"
      >
        <ChevronLeft className="w-8 h-8" />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-yellow-500/20 rounded-full blur opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-30 group p-4 bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600/30 text-slate-200 rounded-full hover:from-amber-500/20 hover:to-yellow-500/20 hover:border-amber-400/50 hover:text-amber-300 transform hover:scale-110 transition-all duration-500"
      >
        <ChevronRight className="w-8 h-8" />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-yellow-500/20 rounded-full blur opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
      </button>

      {/* Advanced Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex space-x-4">
        {carouselData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`group relative transition-all duration-500 ${
              index === currentSlide ? 'scale-125' : 'hover:scale-110'
            }`}
          >
            <div className={`w-4 h-4 rounded-full transition-all duration-500 ${
              index === currentSlide
                ? 'bg-gradient-to-r from-amber-400 to-yellow-500 shadow-lg'
                : 'bg-slate-400/40 group-hover:bg-slate-300/60'
            }`}></div>
            
            {index === currentSlide && (
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full blur animate-pulse"></div>
            )}
          </button>
        ))}
      </div>

      {/* Advanced Stats Bar with Curves */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg
          className="w-full h-24"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="statsGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#1e293b', stopOpacity: 0.95 }} />
              <stop offset="30%" style={{ stopColor: '#334155', stopOpacity: 0.95 }} />
              <stop offset="70%" style={{ stopColor: '#475569', stopOpacity: 0.95 }} />
              <stop offset="100%" style={{ stopColor: '#64748b', stopOpacity: 0.95 }} />
            </linearGradient>
          </defs>
          
          <path
            d="M0,100 L0,40 Q300,10 600,40 T1200,40 L1200,100 Z"
            fill="url(#statsGradient)"
          />
          
          <path
            d="M0,100 L0,50 Q300,20 600,50 T1200,50 L1200,100 Z"
            fill="url(#statsGradient)"
            opacity="0.7"
          />
        </svg>
        
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center text-white group">
                <div className="flex items-center justify-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-6 h-6 text-slate-900" />
                  </div>
                  <span className="text-4xl font-bold bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent">15+</span>
                </div>
                <p className="text-slate-300 font-medium">Years Experience</p>
              </div>
              
              <div className="text-center text-white group">
                <div className="flex items-center justify-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Building2 className="w-6 h-6 text-slate-900" />
                  </div>
                  <span className="text-4xl font-bold bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent">500+</span>
                </div>
                <p className="text-slate-300 font-medium">Projects Completed</p>
              </div>
              
              <div className="text-center text-white group">
                <div className="flex items-center justify-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-6 h-6 text-slate-900" />
                  </div>
                  <span className="text-4xl font-bold bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent">450+</span>
                </div>
                <p className="text-slate-300 font-medium">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;