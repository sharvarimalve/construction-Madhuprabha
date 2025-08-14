import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail, MapPin, Clock, MessageSquare, Send, Sparkles } from 'lucide-react';
import { contactData } from '../mockData';

const ContactSection = () => {
  const contactMethods = [
    { icon: Phone, title: "Call Us", detail: contactData.phone1, secondDetail: contactData.phone2, color: "from-blue-500 to-cyan-600" },
    { icon: Mail, title: "Email Us", detail: contactData.email, color: "from-emerald-500 to-green-600" },
    { icon: MapPin, title: "Visit Us", detail: contactData.address, link: contactData.googleMapsUrl, color: "from-purple-500 to-violet-600" }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-100 via-white to-amber-50/30 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-20 w-72 h-72 bg-gradient-to-br from-amber-200/15 to-yellow-300/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 right-32 w-56 h-56 bg-gradient-to-br from-orange-200/15 to-amber-300/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-amber-100/80 to-yellow-100/80 backdrop-blur-sm border border-amber-200/50 rounded-full mb-8 shadow-lg">
            <Sparkles className="w-5 h-5 text-amber-600 animate-pulse" />
            <span className="text-slate-700 font-bold text-sm uppercase tracking-wider">Get In Touch</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
            Let's Build Your{' '}
            <span className="bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 bg-clip-text text-transparent">
              Dream Home
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Ready to start your construction journey? Contact us today for a free consultation 
            and let's transform your vision into reality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Methods */}
          <div className="space-y-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <div
                    key={index}
                    className="group relative p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-200/50 transform hover:-translate-y-3"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    {/* Curved top design */}
                    <div className="absolute top-0 left-0 right-0 h-4">
                      <svg className="w-full h-full" viewBox="0 0 200 16" preserveAspectRatio="none">
                        <path d="M0,16 Q100,0 200,16 L200,0 L0,0 Z" fill="url(#contactGradient)" />
                        <defs>
                          <linearGradient id="contactGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{ stopColor: '#f59e0b', stopOpacity: 0.8 }} />
                            <stop offset="100%" style={{ stopColor: '#d97706', stopOpacity: 0.8 }} />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>

                    <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors duration-300">{method.title}</h3>
                    <p className="text-slate-700 font-medium mb-1">
                      {method.link ? (
                        <a href={method.link} target="_blank" rel="noopener noreferrer" className="hover:text-amber-600 transition-colors">
                          {method.detail}
                        </a>
                      ) : (
                        method.detail
                      )}
                    </p>
                    {method.secondDetail && (
                      <p className="text-slate-700 font-medium mb-1">{method.secondDetail}</p>
                    )}
                    <p className="text-slate-500 text-sm">{method.link ? "Click to view on map" : "Click to connect"}</p>
                  </div>
                );
              })}
            </div>

            {/* Quick Contact Form */}
            <div className="relative bg-white rounded-3xl shadow-2xl p-10 border border-slate-200/50">
              {/* Curved top design */}
              <div className="absolute top-0 left-0 right-0 h-4">
                <svg className="w-full h-full" viewBox="0 0 400 16" preserveAspectRatio="none">
                  <path d="M0,16 Q200,0 400,16 L400,0 L0,0 Z" fill="url(#formGradient)" />
                  <defs>
                    <linearGradient id="formGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{ stopColor: '#f59e0b', stopOpacity: 0.8 }} />
                      <stop offset="50%" style={{ stopColor: '#d97706', stopOpacity: 0.8 }} />
                      <stop offset="100%" style={{ stopColor: '#b45309', stopOpacity: 0.8 }} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Quick Message</h3>
              </div>

              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-6 py-4 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all duration-300 bg-slate-50/50 hover:bg-white"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Your Phone"
                    className="w-full px-6 py-4 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all duration-300 bg-slate-50/50 hover:bg-white"
                  />
                </div>
                <div>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full px-6 py-4 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all duration-300 resize-none bg-slate-50/50 hover:bg-white"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="group relative w-full py-4 px-6 font-bold text-lg rounded-2xl overflow-hidden transition-all duration-500 transform hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 transition-all duration-500 group-hover:from-yellow-400 group-hover:via-amber-500 group-hover:to-orange-600"></div>
                  
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10 flex items-center justify-center space-x-3 text-slate-900">
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    <span>Send Message</span>
                  </div>
                </button>
              </form>
            </div>
          </div>

          {/* Map and Office Info */}
          <div className="space-y-8">
            {/* Map Placeholder */}
            <div className="relative bg-gradient-to-br from-slate-200 to-slate-300 rounded-3xl overflow-hidden shadow-2xl h-96 border border-slate-200/50">
              {/* Curved overlay */}
              <div className="absolute top-0 left-0 right-0 h-6">
                <svg className="w-full h-full" viewBox="0 0 400 24" preserveAspectRatio="none">
                  <path d="M0,24 Q200,0 400,24 L400,0 L0,0 Z" fill="url(#mapGradient)" />
                  <defs>
                    <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{ stopColor: '#f59e0b', stopOpacity: 0.9 }} />
                      <stop offset="50%" style={{ stopColor: '#d97706', stopOpacity: 0.9 }} />
                      <stop offset="100%" style={{ stopColor: '#b45309', stopOpacity: 0.9 }} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-orange-500/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-slate-700">
                  <MapPin className="w-16 h-16 mx-auto mb-4 text-amber-600" />
                  <p className="font-bold text-xl">Our Office Location</p>
                  <p className="text-sm mt-2 max-w-sm">{contactData.address}</p>
                </div>
              </div>
              
              {/* Animated Location Pin */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-full border-4 border-white shadow-2xl animate-bounce"></div>
              </div>
            </div>

            {/* Office Details Card */}
            <div className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600 text-white rounded-3xl p-10 shadow-2xl border border-slate-600/30">
              {/* Curved accent */}
              <div className="absolute top-0 left-0 right-0 h-4">
                <svg className="w-full h-full" viewBox="0 0 400 16" preserveAspectRatio="none">
                  <path d="M0,16 Q200,0 400,16 L400,0 L0,0 Z" fill="url(#officeGradient)" />
                  <defs>
                    <linearGradient id="officeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{ stopColor: '#f59e0b', stopOpacity: 1 }} />
                      <stop offset="50%" style={{ stopColor: '#d97706', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: '#b45309', stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <h4 className="text-3xl font-bold mb-8">Visit Our Office</h4>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-700/50 backdrop-blur-sm hover:bg-slate-600/50 transition-colors duration-300">
                  <MapPin className="w-6 h-6 mt-1 text-amber-400 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-amber-200">Address</p>
                    <p className="text-sm text-slate-300">{contactData.address}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-700/50 backdrop-blur-sm hover:bg-slate-600/50 transition-colors duration-300">
                  <Phone className="w-6 h-6 mt-1 text-amber-400 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-amber-200">Contact Numbers</p>
                    <p className="text-sm text-slate-300">{contactData.phone1}</p>
                    <p className="text-sm text-slate-300">{contactData.phone2}</p>
                  </div>
                </div>
              </div>

              <Link
                to="/contact"
                className="group relative inline-flex items-center space-x-3 mt-8 px-8 py-4 font-bold rounded-full overflow-hidden transition-all duration-500 transform hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm border border-white/30 transition-all duration-500 group-hover:from-amber-500/80 group-hover:to-yellow-500/80 group-hover:border-amber-400/50"></div>
                
                <span className="relative z-10 text-white group-hover:text-slate-900 transition-colors duration-300">Visit Our Office</span>
                <ArrowRight className="relative z-10 w-5 h-5 text-white group-hover:text-slate-900 group-hover:translate-x-1 transition-all duration-300" />
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <Link
            to="/contact"
            className="group relative inline-flex items-center space-x-4 px-12 py-6 font-bold text-xl rounded-full overflow-hidden transition-all duration-500 transform hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 transition-all duration-500 group-hover:from-amber-500 group-hover:via-yellow-500 group-hover:to-orange-500"></div>
            
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            <div className="absolute -inset-2 bg-gradient-to-r from-slate-600 to-slate-500 group-hover:from-amber-400 group-hover:to-yellow-500 rounded-full blur opacity-30 group-hover:opacity-60 transition-all duration-500"></div>
            
            <span className="relative z-10 text-white group-hover:text-slate-900 transition-colors duration-300">Get Free Consultation</span>
            <ArrowRight className="relative z-10 w-6 h-6 text-white group-hover:text-slate-900 group-hover:translate-x-2 transition-all duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;