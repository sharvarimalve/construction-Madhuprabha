import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Building, Users, Phone, Image } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About Us', path: '/about', icon: Users },
    { name: 'Projects', path: '/projects', icon: Building },
    { name: 'Gallery', path: '/gallery', icon: Image },
    { name: 'Contact', path: '/contact', icon: Phone }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="w-50 h-10 rounded-lg overflow-hidden">
              <img
                src="/images/Madhuprabhalogo.jpg"
                alt="Madhuprabha Construction Logo"
                className="w-full h-full object-fill"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative px-2 py-1 flex items-center space-x-2 font-medium transition 
                    ${isActive(item.path) ? 'text-red-600 font-semibold' : 'text-red-500 hover:text-red-600'}
                  `}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                  {isActive(item.path) && (
                    <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-red-600 rounded-full"></span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="px-5 py-2 font-semibold rounded-[50px] bg-red-600 text-white hover:bg-red-700"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 rounded-xl bg-slate-800 text-red-500"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 bg-white rounded-3xl shadow border border-slate-200">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-6 py-4 mx-3 rounded-2xl flex items-center space-x-4 transition ${
                    isActive(item.path)
                      ? 'bg-red-600 text-white font-semibold'
                      : 'text-red-500 hover:bg-red-100 hover:text-red-600'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}

            <div className="px-2 pt-4">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full py-2 bg-red-600 text-white text-center font-bold rounded-[30px]"
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
