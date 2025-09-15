import React from 'react';
import { Award, Users, Target, CheckCircle } from 'lucide-react';
import Footer from '../components/Footer';

const AwardsPage = () => {
  

  const values = [
    {
      icon: Target,
      title: "Quality First",
      description: "We never compromise on quality. Every project reflects our commitment to excellence and precision in construction."
    },
    {
      icon: CheckCircle,
      title: "Timely Delivery",
      description: "We understand the value of time and ensure all projects are completed within the agreed timeline."
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Our clients are at the heart of everything we do. We listen, understand, and deliver beyond expectations."
    },
    {
      icon: Award,
      title: "Innovation",
      description: "We embrace modern construction techniques and technologies to provide innovative solutions."
    }
  ];

  const teamMembers = [
    {
      name: "Mr. Ashish Londhe",
      role: "Founder & Managing Director",
      experience: "20+ Years Experience",
      image: "/images/vikashsir.jpeg",
    },
    
  ];

  const awards = [
    { image: "/images/certification.jpeg", title: "Times Real Estate Award", caption: "Award received for Prajakta Ikebana — Presented by Hon'ble Shri. Nitinji Gadkari" },
    { image: "/images/PrajactaTai Award-7.jpeg", title: "Recognized for Excellence", caption: "Celebrating innovation and trust at Times Property Real Estate Awards 2022" },
    { image: "/images/PrajactaTai Award-5.jpeg", title: "Apartment Excellence Award", caption: "Honored with the 1st Position at MP Birla Cement Technocrat Awards 2024 for Apartment Building" },
    { image: "/images/PrajactaTai Award-6.jpeg", title: "Celebrating Achievement", caption: "Recognized for outstanding contribution at Times Property Awards 2022" },
    { image: "/images/PrajactaTai Award-4.jpeg", title: "Pride of Achievement", caption: "Recognized with 1st Rank in Apartment Building – MP Birla Cement Awards 2024" },
    { image: "/images/carazol5.JPG", title: " A Moment of Recognition", caption: "Honored with 1st Rank in Apartment Building at MP Birla Cement Awards 2024" },
    { image: "/images/Prajktaproject.JPG", title: " Celebrating Success", caption: "Our team being recognized for the 'Prajakta' project" },
    { image: "/images/PrajctaTai Award-3.jpeg", title: " Recognized for Quality and Excellence", caption: "We are honored to be recognized by the residents of Prajakta Green Serenity" },
    { image: "/images/all member .JPG", title: "Customer Satisfaction Award", caption: "Client-first approach in every decision" },
    
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Awards Gallery */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Awards &{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
                Recognitions
              </span>
            </h1>
            <p className="text-base sm:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto">
              Celebrating our achievements and recognition in the construction industry.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {awards.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-red-100 bg-white shadow-md hover:shadow-2xl transform-gpu transition-all duration-300 hover:-translate-y-1"
              >
                {/* Badge */}
                <div className="absolute top-3 left-3 z-20">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-red-600 shadow">
                    <Award className="w-4 h-4" />
                    <span className="text-xs font-semibold tracking-wide">Award</span>
                  </div>
                </div>

                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transform-gpu transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Overlay gradient */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-300" />

                {/* Shine effect */}
                <div className="pointer-events-none absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-1/2 group-hover:translate-x-1/2 transition-transform duration-700" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-10">
                  <h3 className="text-lg sm:text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-1 text-xs sm:text-sm text-red-100">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      

      {/* Our Team Section */}
     
      <Footer />
    </div>
  );
};

export default AwardsPage;
