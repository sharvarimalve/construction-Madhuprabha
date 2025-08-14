import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail, MapPin, Clock, MessageSquare, Send } from 'lucide-react';
import { contactData } from '../mockData';

const ContactSection = () => {
  const contactMethods = [
    { icon: Phone, title: "Call Us", detail: contactData.phone, color: "from-blue-500 to-blue-600" },
    { icon: Mail, title: "Email Us", detail: contactData.email, color: "from-green-500 to-green-600" },
    { icon: MapPin, title: "Visit Us", detail: "Andheri West, Mumbai", color: "from-purple-500 to-purple-600" },
    { icon: Clock, title: "Working Hours", detail: "Mon-Sat: 9AM-6PM", color: "from-orange-500 to-orange-600" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 rounded-full mb-6">
            <span className="text-orange-700 font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's Build Your{' '}
            <span className="bg-gradient-to-r from-orange-600 to-red-700 bg-clip-text text-transparent">
              Dream Home
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to start your construction journey? Contact us today for a free consultation 
            and let's transform your vision into reality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Methods */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <div
                    key={index}
                    className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200 transform hover:-translate-y-1"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{method.title}</h3>
                    <p className="text-gray-600 text-sm">{method.detail}</p>
                  </div>
                );
              })}
            </div>

            {/* Quick Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Quick Message</h3>
              </div>

              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Your Phone"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-300"
                  />
                </div>
                <div>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-300 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="group w-full flex items-center justify-center space-x-2 py-3 px-6 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>

          {/* Map and Office Info */}
          <div className="space-y-8">
            {/* Map Placeholder */}
            <div className="relative bg-gray-200 rounded-2xl overflow-hidden shadow-xl h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-red-500/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <MapPin className="w-12 h-12 mx-auto mb-3 text-orange-500" />
                  <p className="font-semibold">Interactive Map</p>
                  <p className="text-sm">Location: {contactData.address}</p>
                </div>
              </div>
              
              {/* Location Pin */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-6 h-6 bg-red-500 rounded-full border-4 border-white shadow-lg animate-pulse"></div>
              </div>
            </div>

            {/* Office Details */}
            <div className="bg-gradient-to-br from-orange-500 to-red-600 text-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Our Office</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 mt-1 text-orange-200" />
                  <div>
                    <p className="font-medium text-orange-100">Address</p>
                    <p className="text-sm text-white/90">{contactData.address}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 mt-1 text-orange-200" />
                  <div>
                    <p className="font-medium text-orange-100">Working Hours</p>
                    <p className="text-sm text-white/90">{contactData.workingHours}</p>
                  </div>
                </div>
              </div>

              <Link
                to="/contact"
                className="group inline-flex items-center space-x-2 mt-6 px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-full hover:bg-white/30 transform hover:scale-105 transition-all duration-300"
              >
                <span>Visit Our Office</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Link
            to="/contact"
            className="group inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-full hover:from-amber-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-xl"
          >
            <span>Get Free Consultation</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;