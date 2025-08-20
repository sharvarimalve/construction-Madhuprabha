import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail, MapPin, Clock, MessageSquare, Send, Sparkles } from 'lucide-react';
import { contactData } from '../mockData';

const ContactSection = () => {
  const contactMethods = [
    { icon: Phone, title: "Call Us", detail: contactData.phone1, secondDetail: contactData.phone2, link: `tel:${contactData.phone1}`, secondLink: `tel:${contactData.phone2}`, color: "from-blue-500 to-cyan-600" },
    { icon: Mail, title: "Email Us", detail: contactData.email, link: `mailto:${contactData.email}`, color: "from-emerald-500 to-green-600" },
    { icon: MapPin, title: "Visit Us", detail: contactData.address, link: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactData.address)}`, color: "from-purple-500 to-violet-600" }
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




        


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <div key={index} className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-amber-200 transform hover:-translate-y-2">
                <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{method.title}</h3>
                {method.link ? (
                  <p className="text-slate-700 font-medium mb-2">
                    <a href={method.link} target={method.title === "Visit Us" ? "_blank" : "_self"} rel="noopener noreferrer" className="hover:text-amber-600 transition-colors duration-300">
                      {method.detail}
                    </a>
                    {method.secondDetail && method.secondLink && (
                      <>
                        <br />
                        <a href={method.secondLink} className="hover:text-amber-600 transition-colors duration-300">
                          {method.secondDetail}
                        </a>
                      </>
                    )}
                  </p>
                ) : (
                  <p className="text-slate-700 font-medium mb-2">{method.detail}</p>
                )}
                <p className="text-sm text-slate-500">{method.description}</p>
              </div>
            );
          })}
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