import React from 'react';
import { Link } from 'react-router-dom';
import { Building, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, ArrowUp } from 'lucide-react';
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
    { icon: Facebook, href: '#', color: 'hover:text-blue-500' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-500' },
    { icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { icon: Linkedin, href: '#', color: 'hover:text-blue-600' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-red-500 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center space-x-3 mb-6 group">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Building className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                    Madhuprabha
                  </h3>
                  <p className="text-xs text-gray-400 -mt-1">Construction</p>
                </div>
              </Link>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Building dreams into reality with 15+ years of experience in premium residential construction. 
                Quality craftsmanship and customer satisfaction is our priority.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className={`w-10 h-10 bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-gray-700 hover:border-gray-600`}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6 relative">
                Quick Links
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-orange-500 to-red-600"></div>
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm flex items-center group"
                    >
                      <span className="w-0 h-0.5 bg-orange-500 group-hover:w-3 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6 relative">
                Our Services
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-orange-500 to-red-600"></div>
              </h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <span className="text-gray-400 text-sm flex items-center group cursor-pointer hover:text-orange-400 transition-colors duration-300">
                      <span className="w-0 h-0.5 bg-orange-500 group-hover:w-3 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6 relative">
                Contact Info
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-orange-500 to-red-600"></div>
              </h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-400 text-sm leading-relaxed">{contactData.address}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <p className="text-gray-400 text-sm">{contactData.phone}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <p className="text-gray-400 text-sm">{contactData.email}</p>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 mt-6 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-600 text-white text-sm font-semibold rounded-lg hover:from-orange-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <span>Get Quote</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-gray-400 text-sm">
                © 2024 Muze Madhuprabha Construction. All rights reserved.
              </p>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-orange-400 transition-colors duration-300">Privacy Policy</a>
                <a href="#" className="hover:text-orange-400 transition-colors duration-300">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full shadow-lg hover:from-orange-600 hover:to-red-700 transform hover:scale-110 transition-all duration-300 z-50 flex items-center justify-center"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;