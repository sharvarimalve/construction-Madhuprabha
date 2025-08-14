import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Building, Users, Phone, Image } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Projects', path: '/projects', icon: Building },
    { name: 'About Us', path: '/about', icon: Users },
    { name: 'Gallery', path: '/gallery', icon: Image },
    { name: 'Contact', path: '/contact', icon: Phone }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Curved Background Shape */}
      <div className="fixed top-0 left-0 right-0 z-40">
        <div className={`relative transition-all duration-700 ${
          scrolled ? 'h-20' : 'h-24'
        }`}>
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1200 100"
            preserveAspectRatio="none"
            style={{
              filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.1))'
            }}
          >
            <defs>
              <linearGradient id="navGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#1e293b', stopOpacity: 0.95 }} />
                <stop offset="30%" style={{ stopColor: '#334155', stopOpacity: 0.95 }} />
                <stop offset="70%" style={{ stopColor: '#475569', stopOpacity: 0.95 }} />
                <stop offset="100%" style={{ stopColor: '#64748b', stopOpacity: 0.95 }} />
              </linearGradient>
              <linearGradient id="navAccent" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#f59e0b', stopOpacity: 1 }} />
                <stop offset="50%" style={{ stopColor: '#d97706', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#b45309', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            
            {/* Main curved shape */}
            <path
              d="M0,0 L1200,0 L1200,60 Q600,90 0,60 Z"
              fill="url(#navGradient)"
              className="animate-pulse"
            />
            
            {/* Accent curve */}
            <path
              d="M0,55 Q600,85 1200,55 L1200,65 Q600,95 0,65 Z"
              fill="url(#navAccent)"
              opacity="0.3"
            />
            
            {/* Animated wave effect */}
            <path
              d="M0,58 Q300,70 600,58 T1200,58 L1200,63 Q900,75 600,63 T0,63 Z"
              fill="url(#navAccent)"
              opacity="0.5"
              className="animate-pulse"
              style={{ animationDelay: '1s' }}
            />
          </svg>
        </div>
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group relative z-10">
              <div className="relative">
                {/* Animated background */}
                <div className="absolute -inset-2 bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-500 animate-pulse"></div>
                
                {/* Logo container with image */}
                <div className="relative w-50 h-10 rounded-lg overflow-hidden transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                  <img 
                    src="/images/Madhuprabhalogo.jpg" 
                    alt="Madhuprabha Construction Logo" 
                    className="w-full h-full object-fill"
                  />
                </div>
              </div>
              
             
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`group relative px-6 py-3 rounded-full flex items-center space-x-2 font-medium transition-all duration-500 transform hover:scale-105 ${
                      isActive(item.path)
                        ? 'text-amber-300 scale-105'
                        : 'text-slate-200 hover:text-amber-200'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Animated background for active/hover */}
                    <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
                      isActive(item.path)
                        ? 'bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-yellow-500/20 backdrop-blur-sm border border-amber-400/30 shadow-lg'
                        : 'bg-transparent group-hover:bg-slate-700/30 group-hover:backdrop-blur-sm'
                    }`}></div>
                    
                    {/* Floating effect */}
                    <div className={`absolute inset-0 rounded-full blur transition-all duration-500 ${
                      isActive(item.path)
                        ? 'bg-gradient-to-r from-amber-400/30 to-yellow-500/30'
                        : 'group-hover:bg-slate-400/20'
                    }`}></div>
                    
                    <Icon className="w-4 h-4 relative z-10" />
                    <span className="relative z-10">{item.name}</span>
                    
                    {/* Active indicator */}
                    {isActive(item.path) && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full animate-bounce"></div>
                    )}
                  </Link>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block relative z-10">
              <Link
                to="/contact"
                className="group relative px-8 py-3 font-semibold rounded-[50px] overflow-hidden transition-all duration-500 transform hover:scale-105"
              >
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-600 rounded-[50px] transition-all duration-500 group-hover:from-yellow-500 group-hover:via-amber-500 group-hover:to-orange-600"></div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-[50px] skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-[50px] blur opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
                
                <span className="relative z-10 text-slate-900 font-bold group-hover:text-white transition-colors duration-300">Get Quote</span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden relative z-10">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="group p-3 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-600/30 text-slate-200 hover:bg-slate-700/50 hover:text-amber-300 transition-all duration-300"
              >
                <div className="relative">
                  {isOpen ? (
                    <X className="w-6 h-6 transform rotate-180 transition-transform duration-300" />
                  ) : (
                    <Menu className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                  )}
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden transition-all duration-500 overflow-hidden ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="py-6 mt-4 space-y-3 bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-700/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-600/30">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`group block px-6 py-4 mx-3 rounded-2xl flex items-center space-x-4 transition-all duration-300 ${
                      isActive(item.path)
                        ? 'bg-gradient-to-r from-amber-500/20 to-yellow-500/20 text-amber-300 transform scale-105 shadow-lg border border-amber-400/30'
                        : 'text-slate-300 hover:bg-slate-700/50 hover:text-amber-200 hover:transform hover:scale-105'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                    {isActive(item.path) && (
                      <div className="ml-auto w-2 h-2 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full animate-pulse"></div>
                    )}
                  </Link>
                );
              })}
              
              <div className="px-4 pt-4">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="group block w-full py-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-900 text-center font-bold rounded-[50px] hover:from-yellow-500 hover:to-amber-600 transition-all duration-300 shadow-xl transform hover:scale-105"
                >
                  <span className="relative z-10">Get Quote</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;