import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail, MapPin, Sparkles } from 'lucide-react';
import { contactData } from '../mockData';

const ContactSection = () => {
  const contactMethods = [
    { icon: Phone, title: "Call Us", detail: contactData.phone1, secondDetail: contactData.phone2, link: `tel:${contactData.phone1}`, secondLink: `tel:${contactData.phone2}`, color: "from-red-500 to-red-700" },
    { icon: Mail, title: "Email Us", detail: contactData.email, link: `mailto:${contactData.email}`, color: "from-red-500 to-red-700" },
    { icon: MapPin, title: "Visit Us", detail: contactData.address, link: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactData.address)}`, color: "from-red-500 to-red-700" }
  ];

  return (
    <section className="relative py-19 mt-20 bg-white text-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        {/* <div className="text-center mb-24">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-red-50 border border-red-200 rounded-full mb-6 shadow">
            <Sparkles className="w-5 h-5 text-red-600" />
            <span className="text-red-700 font-bold text-sm uppercase tracking-wider">Get In Touch</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Let's Build Your{' '}
            <span className="bg-gradient-to-r from-red-700 via-red-600 to-red-500 bg-clip-text text-transparent">
              Dream Home
            </span>
          </h2>

          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Contact us today to get a free consultation and see how we can make your dream home a reality.
          </p>
        </div> */}

        {/* Contact Methods */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <div key={index} className="relative bg-white rounded-3xl shadow-lg p-8 text-center border border-red-200 hover:shadow-red-300 transition-shadow duration-300">
               
                <div className={`absolute -top-8 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-r ${method.color} rounded-full flex items-center justify-center shadow-lg`}>
                  <Icon className="w-10 h-10 text-white" />
                </div>

                <h3 className="mt-16 text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                {method.link ? (
                  <p className="text-gray-700 font-medium">
                    <a href={method.link} target={method.title === "Visit Us" ? "_blank" : "_self"} rel="noopener noreferrer" className="hover:text-red-600 transition-colors duration-300">
                      {method.detail}
                    </a>
                    {method.secondDetail && method.secondLink && (
                      <>
                        <br />
                        <a href={method.secondLink} className="hover:text-red-600 transition-colors duration-300">
                          {method.secondDetail}
                        </a>
                      </>
                    )}
                  </p>
                ) : (
                  <p className="text-gray-700 font-medium">{method.detail}</p>
                )}
              </div>
            );
          })}
        </div> */}

        {/* CTA Button */}
        {/* <div className="mt-24 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center space-x-4 px-14 py-5 font-bold text-xl rounded-full text-white bg-gradient-to-r from-red-700 via-red-600 to-red-500 hover:from-red-600 hover:to-red-400 transition-all duration-300 shadow-lg"
          >
            <span>Get Free Consultation</span>
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default ContactSection;
