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
    { icon: Facebook, href: '#', color: 'hover:text-red-500' },
    { icon: Instagram, href: '#', color: 'hover:text-red-500' },
    { icon: Twitter, href: '#', color: 'hover:text-red-500' },
    { icon: Linkedin, href: '#', color: 'hover:text-red-500' }
  ];

  return (
    <footer className="relative overflow-hidden bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-8">
            <Link to="/" className="group flex items-center space-x-4">
              <div className="relative w-50 h-10 rounded-lg overflow-hidden transform group-hover:scale-105 transition-all duration-500 shadow-md">
                <img
                  src="/images/Madhuprabhalogo.jpg"
                  alt="Madhuprabha Construction Logo"
                  className="w-full h-full object-fill"
                />
              </div>
            </Link>

            <p className="text-white-400 leading-relaxed">
              Building dreams into reality with 20+ years of experience in premium residential construction.
              Quality craftsmanship and customer satisfaction is our priority.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className={`group relative w-12 h-12 bg-white-800 border border-gray-700 rounded-xl flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:border-red-500 hover:text-red-500`}
                  >
                    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="group flex items-center text-white-400 hover:text-red-500 transition-all duration-300"
                  >
                    <span className="transform group-hover:translate-x-2 transition-transform duration-300">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white">Our Services</h4>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="group flex items-center text-white-400 cursor-pointer hover:text-red-500 transition-all duration-300">
                    <span className="transform group-hover:translate-x-2 transition-transform duration-300">{service}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white flex items-center space-x-2">
              <span>Contact Info</span>
              <Sparkles className="w-4 h-4 text-red-500 animate-pulse" />
            </h4>

            <div className="space-y-6">
              <div className="group flex items-start space-x-4 p-4 rounded-xl bg-gray-800 hover:bg-gray-700 transition-colors duration-300">
                <MapPin className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactData.address)}`} target="_blank" rel="noopener noreferrer" className="text-white-300">{contactData.address}</a>
              </div>

              <div className="group flex items-center space-x-4 p-4 rounded-xl bg-gray-800 hover:bg-gray-700 transition-colors duration-300">
                <Phone className="w-6 h-6 text-red-500 flex-shrink-0" />
                <a href={`tel:${contactData.phone1}`} className="text-white-300">{contactData.phone1}</a>
              </div>

              <div className="group flex items-start space-x-4 p-4 rounded-xl bg-gray-800 hover:bg-gray-700 transition-colors duration-300">
                <Mail className="w-6 h-6 text-red-500 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <a
                    href={`mailto:${contactData.email}`}
                    className="block text-white-300 break-words"
                  >
                    {contactData.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col sm:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© 2025 Madhuprabha Construction. All rights reserved.</p>
          <div className="flex items-center space-x-4 mt-2 sm:mt-0">
            <a href="https://www.rsinfotechsys.com/" className="hover:text-red-500 transition-colors duration-300">
              © RIGHT SERVE INFOTECH SYSTEMS PVT. LTD. 2022
            </a>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 group w-14 h-14 bg-gray-800 text-red-500 border border-red-500 rounded-full shadow-lg hover:bg-red-500 hover:text-white transform hover:scale-110 transition-all duration-500 flex items-center justify-center z-50"
        >
          <ArrowUp className="w-6 h-6 transition-transform duration-300 group-hover:-translate-y-1" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
