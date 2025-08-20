import React from 'react';
import { Link } from 'react-router-dom';
import { Building, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, ArrowUp, Sparkles } from 'lucide-react';
import { contactData } from '../mockData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' }
  ];

  const services = [
    'Residential Construction',
    'Villa Development',
    'Apartment Projects',
    'Home Renovation',
    'Interior Design',
    'Project Consultation'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-400' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-400' },
    { icon: Twitter, href: '#', color: 'hover:text-blue-300' },
    { icon: Linkedin, href: '#', color: 'hover:text-blue-500' }
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Curved Top Section */}
      <div className="relative">
        <svg
          className="w-full h-24"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
          style={{ transform: 'rotate(180deg)' }}
        >
          <defs>
            <linearGradient id="footerTopGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#0f172a', stopOpacity: 1 }} />
              <stop offset="30%" style={{ stopColor: '#1e293b', stopOpacity: 1 }} />
              <stop offset="70%" style={{ stopColor: '#334155', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#475569', stopOpacity: 1 }} />
            </linearGradient>
            <linearGradient id="footerAccent" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#f59e0b', stopOpacity: 0.6 }} />
              <stop offset="50%" style={{ stopColor: '#d97706', stopOpacity: 0.6 }} />
              <stop offset="100%" style={{ stopColor: '#b45309', stopOpacity: 0.6 }} />
            </linearGradient>
          </defs>

          <path
            d="M0,100 L0,40 Q300,10 600,40 T1200,40 L1200,100 Z"
            fill="url(#footerTopGradient)"
          />

          <path
            d="M0,100 L0,50 Q300,20 600,50 T1200,50 L1200,100 Z"
            fill="url(#footerAccent)"
          />
        </svg>
      </div>

      {/* Main Footer Content */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 relative">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-amber-500/10 to-yellow-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0s' }}></div>
          <div className="absolute bottom-32 right-32 w-48 h-48 bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-yellow-500/5 to-orange-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-8">
              <Link to="/" className="group flex items-center space-x-4">
                <div className="relative">
                  {/* Animated glow */}
                  <div className="absolute -inset-3 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-500 animate-pulse"></div>

                  {/* Logo container */}
                  <div className="relative w-50 h-10 rounded-lg overflow-hidden transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                    <img
                      src="/images/Madhuprabhalogo.jpg"
                      alt="Madhuprabha Construction Logo"
                      className="w-full h-full object-fill"
                    />
                  </div>
                </div>


              </Link>

              <p className="text-slate-300 leading-relaxed">
                Building dreams into reality with 20+ years of experience in premium residential construction.
                Quality craftsmanship and customer satisfaction is our priority.
              </p>

              {/* Enhanced Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className={`group relative w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600/50 rounded-xl flex items-center justify-center text-slate-400 ${social.color} transition-all duration-300 hover:scale-110 hover:border-amber-400/50 hover:shadow-xl`}
                    >
                      <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-yellow-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white relative">
                <span className="relative">
                  Quick Links
                  <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full"></div>
                </span>
              </h4>
              <ul className="space-y-4">
                {quickLinks.map((link, index) => (
                  <li key={link.name} style={{ animationDelay: `${index * 100}ms` }}>
                    <Link
                      to={link.path}
                      className="group flex items-center text-slate-400 hover:text-amber-300 transition-all duration-300"
                    >
                      <div className="w-0 h-px bg-gradient-to-r from-amber-400 to-yellow-500 group-hover:w-6 transition-all duration-300 mr-0 group-hover:mr-3"></div>
                      <span className="transform group-hover:translate-x-2 transition-transform duration-300">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>


            {/* Services */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white relative">
                <span className="relative">
                  Our Services
                  <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full"></div>
                </span>
              </h4>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <li key={index} style={{ animationDelay: `${index * 100}ms` }}>
                    <span className="group flex items-center text-slate-400 cursor-pointer hover:text-amber-300 transition-all duration-300">
                      <div className="w-0 h-px bg-gradient-to-r from-amber-400 to-yellow-500 group-hover:w-6 transition-all duration-300 mr-0 group-hover:mr-3"></div>
                      <span className="transform group-hover:translate-x-2 transition-transform duration-300">{service}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white relative">
                <span className="relative flex items-center space-x-2">
                  <span>Contact Info</span>
                  <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
                  <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full"></div>
                </span>
              </h4>

              <div className="space-y-6">
                <div className="group flex items-start space-x-4 p-4 rounded-xl bg-slate-800/30 hover:bg-slate-700/30 transition-colors duration-300">
                  <MapPin className="w-6 h-6 text-amber-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactData.address)}`} target="_blank" rel="noopener noreferrer" className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">{contactData.address}</a>
                </div>

                <div className="group flex items-center space-x-4 p-4 rounded-xl bg-slate-800/30 hover:bg-slate-700/30 transition-colors duration-300">
                  <Phone className="w-6 h-6 text-amber-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <a href={`tel:${contactData.phone1}`} className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300">{contactData.phone1}</a>
                </div>

                <div className="group flex items-start space-x-4 p-4 rounded-xl bg-slate-800/30 hover:bg-slate-700/30 transition-colors duration-300">
                  <Mail className="w-6 h-6 text-amber-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />

                  <div className="flex-1 min-w-0">
                    <a
                      href={`mailto:${contactData.email}`}
                      className="block text-slate-300 group-hover:text-slate-200 transition-colors duration-300 break-words whitespace-normal xl:text-base lg:text-sm md:text-sm text-xs"
                    >
                      {contactData.email}
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Curves */}
        <div className="relative">
          <svg
            className="w-full h-16"
            viewBox="0 0 1200 50"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="bottomGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#0f172a', stopOpacity: 1 }} />
                <stop offset="50%" style={{ stopColor: '#1e293b', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#334155', stopOpacity: 1 }} />
              </linearGradient>
            </defs>

            <path
              d="M0,0 Q300,25 600,0 T1200,0 L1200,50 L0,50 Z"
              fill="url(#bottomGradient)"
            />
          </svg>

          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
              <div className="flex flex-col sm:flex-row justify-between items-center w-full space-y-4 sm:space-y-0">
                <p className="text-slate-400 text-sm">
                  © 2025 Madhuprabha Construction. All rights reserved.
                </p>
                <div className="flex items-center space-x-6 text-sm text-slate-400">
                  <a href="https://www.rsinfotechsys.com/" className="hover:text-amber-400 transition-colors duration-300"> © Copyright RIGHT SERVE INFOTECH SYSTEMS PVT. LTD. 2022</a>
                  <a href="#" className="hover:text-amber-400 transition-colors duration-300"></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 group w-14 h-14 bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-900 rounded-full shadow-2xl hover:from-yellow-500 hover:to-amber-600 transform hover:scale-110 transition-all duration-500 z-50 flex items-center justify-center"
        >
          <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300" />
          <div className="absolute -inset-2 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full blur opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
        </button>
      </div>
    </footer>
  );
};

export default Footer;