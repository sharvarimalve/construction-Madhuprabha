import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Users, CheckCircle, Star, Shield, Lightbulb } from "lucide-react";

// Safe fallback data
const aboutUsDataSafe = {
  shortDescription:
    "We build premium quality homes with excellence and dedication. Our mission is to create spaces that reflect your vision and provide lasting value.",
  experience: 10,
  projectsCompleted: 50,
  happyClients: 100,
  highlights: [
    { icon: Star, title: "Premium Quality", description: "Using the best materials and skilled craftsmanship for every project." },
    { icon: Shield, title: "Reliability", description: "On-time delivery and commitment to client satisfaction." },
    { icon: Lightbulb, title: "Innovative Designs", description: "Creative and functional designs tailored to your lifestyle." }
  ],
  image: "https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=800", // public folder image
};

const AboutSection = ({ data = aboutUsDataSafe }) => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Subtle red construction background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: "url('/images/construction-bg.png')",
        }}
      ></div>

      {/* Red glow overlay */}
      <div className="absolute inset-0 bg-red-50 opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
       {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              About <span className="text-red-500">Madhuprabha</span>
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Since 1998, Madhuprabha Constructions has been at the forefront of India's construction industry, 
              delivering exceptional residential, commercial, and infrastructure projects with unwavering commitment 
              to quality and innovation.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Our journey began with a simple vision: to transform blueprints into lasting legacies. Today, we stand 
              as a testament to architectural excellence, having crafted spaces that inspire, protect, and endure.
            </p>

            {/* Mission & Values */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Our Mission</h4>
                  <p className="text-slate-600">To create sustainable, innovative structures that enhance communities and exceed expectations.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Our Values</h4>
                  <p className="text-slate-600">Integrity, Quality, Innovation, and Customer Satisfaction guide every decision we make.</p>
                </div>
              </div>
            </div>

          <button className="mt-8 bg-red-600 text-white px-8 py-3 rounded-full font-medium hover:bg-red-700 transition-all duration-300 transform hover:scale-105">
  Learn More About Us
</button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-lg">
              <img
                src={data.image}
                alt="About Us"
                className="w-full h-auto max-h-[28rem] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
