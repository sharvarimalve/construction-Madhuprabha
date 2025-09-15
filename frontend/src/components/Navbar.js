import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Building, Users, Phone, Image, Briefcase, ChevronDown, Handshake } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [careerDropdownOpen, setCareerDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (careerDropdownOpen && !event.target.closest('.career-dropdown')) {
        setCareerDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [careerDropdownOpen]);

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About Us', path: '/about', icon: Users },
    { name: 'Projects', path: '/projects', icon: Building },
    { name: 'Career', path: '/career', icon: Briefcase, hasDropdown: true },
    { name: 'Gallery', path: '/gallery', icon: Image },
    { name: 'Contact', path: '/contact', icon: Phone }
  ];

  const careerDropdownItems = [
    { name: 'Career', path: '/career', icon: Briefcase },
    { name: 'Become Partner', path: '/becomePartner', icon: Handshake }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${location.pathname === '/'
          ? (scrolled ? 'bg-white shadow-md' : 'bg-transparent')
          : 'bg-white shadow-md'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          {/* Logo */}
          <Link to="/" className="flex items-center focus:outline-none focus:ring-0">
            <div className="h-32 w-auto flex items-center">
              <img
                src="/images/about (4).png"
                alt="Madhuprabha Construction Logo"
                className="h-full w-auto object-contain"
              />
            </div>
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => {
              const Icon = item.icon;

              if (item.hasDropdown) {
                return (
                  <div
                    key={item.name}
                    className="relative career-dropdown"
                    onMouseEnter={() => setCareerDropdownOpen(true)}
                    onMouseLeave={() => setCareerDropdownOpen(true)}
                  >
                    <div className="flex items-center">
                      <div
                        onClick={() => setCareerDropdownOpen(!careerDropdownOpen)}
                        className={`relative px-2 py-1 flex items-center space-x-2 font-medium transition cursor-pointer focus:outline-none focus:ring-0
                          ${careerDropdownItems.some(dropdownItem => isActive(dropdownItem.path))
                            ? 'text-red-600 font-semibold'
                            : location.pathname === '/'
                              ? (scrolled ? 'text-red-500 hover:text-red-600' : 'text-white hover:text-red-200')
                              : 'text-red-500 hover:text-red-600'
                          }
                        `}>
                        <Icon className="w-4 h-4" />
                        <span>{item.name}</span>
                        {careerDropdownItems.some(dropdownItem => isActive(dropdownItem.path)) && (
                          <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-red-600 rounded-full"></span>
                        )}
                      </div>

                      <button
                        onClick={() => setCareerDropdownOpen(!careerDropdownOpen)}
                        className={`px-1 py-1 transition focus:outline-none
                          ${location.pathname === '/'
                            ? (scrolled ? 'text-gray-400 hover:text-gray-600' : 'text-white/70 hover:text-white')
                            : 'text-gray-400 hover:text-gray-600'
                          }
                        `}
                      >
                        <ChevronDown className={`w-3 h-3 transition-transform ${careerDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                    </div>

                    {/* Dropdown Menu */}
                    {careerDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                        {careerDropdownItems.map((dropdownItem) => {
                          const DropdownIcon = dropdownItem.icon;
                          return (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.path}
                              onClick={() => setCareerDropdownOpen(false)}
                              className={`flex items-center space-x-3 px-4 py-2 text-sm transition focus:outline-none focus:ring-0
                                ${isActive(dropdownItem.path)
                                  ? 'bg-red-50 text-red-600 font-semibold'
                                  : 'text-gray-700 hover:bg-gray-50 hover:text-red-600'}
                              `}
                            >
                              <DropdownIcon className="w-4 h-4" />
                              <span>{dropdownItem.name}</span>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative px-2 py-1 flex items-center space-x-2 font-medium transition focus:outline-none focus:ring-0
                    ${isActive(item.path)
                      ? 'text-red-600 font-semibold'
                      : location.pathname === '/'
                        ? (scrolled ? 'text-red-500 hover:text-red-600' : 'text-white hover:text-red-200')
                        : 'text-red-500 hover:text-red-600'
                    }
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

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-3 rounded-xl transition-colors focus:outline-none focus:ring-0
                ${location.pathname === '/'
                  ? (scrolled ? 'bg-slate-800 text-red-500' : 'bg-white/10 backdrop-blur-sm text-white border border-white/20')
                  : 'bg-slate-800 text-red-500'
                }
              `}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 bg-white rounded-3xl shadow">
            {navItems.map((item) => {
              const Icon = item.icon;

              if (item.hasDropdown) {
                return (
                  <div key={item.name}>
                    <div className="flex items-center">
                      <div
                        onClick={() => setCareerDropdownOpen(!careerDropdownOpen)}
                        className="flex-1 px-6 py-4 mx-3 rounded-2xl flex items-center space-x-4 transition cursor-pointer text-red-500 hover:bg-red-100 hover:text-red-600 focus:outline-none focus:ring-0"
                      >
                        <Icon className="w-5 h-5" />
                        <span className="font-medium">{item.name}</span>
                      </div>

                      <button
                        onClick={() => setCareerDropdownOpen(!careerDropdownOpen)}
                        className="px-3 py-4 text-gray-400 hover:text-gray-600 transition focus:outline-none focus:ring-0"
                      >
                        <ChevronDown className={`w-4 h-4 transition-transform ${careerDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                    </div>

                    {/* Mobile Dropdown */}
                    {careerDropdownOpen && (
                      <div className="ml-6 mr-3 mt-2 space-y-2">
                        {careerDropdownItems.map((dropdownItem) => {
                          const DropdownIcon = dropdownItem.icon;
                          return (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.path}
                              onClick={() => {
                                setIsOpen(false);
                                setCareerDropdownOpen(false);
                              }}
                              className={`block px-4 py-3 rounded-xl flex items-center space-x-3 transition focus:outline-none focus:ring-0
                                ${isActive(dropdownItem.path)
                                  ? 'bg-red-600 text-white font-semibold'
                                  : 'text-red-500 hover:bg-red-100 hover:text-red-600'}
                              `}
                            >
                              <DropdownIcon className="w-4 h-4" />
                              <span className="font-medium">{dropdownItem.name}</span>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-6 py-4 mx-3 rounded-2xl flex items-center space-x-4 transition focus:outline-none focus:ring-0
                    ${isActive(item.path)
                      ? 'bg-red-600 text-white font-semibold'
                      : 'text-red-500 hover:bg-red-100 hover:text-red-600'}
                  `}
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
                className="block w-full py-2 bg-red-600 text-white text-center font-bold rounded-[30px] focus:outline-none focus:ring-0"
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
