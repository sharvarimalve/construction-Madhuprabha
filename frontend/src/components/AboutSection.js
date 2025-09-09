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
  image: "/images/about.jpg", // public folder image
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
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              About{" "}
              <span className="bg-gradient-to-r from-red-700 to-red-500 bg-clip-text text-transparent">
                Us
              </span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              {data.shortDescription}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <Award className="w-8 h-8 mx-auto text-red-600 mb-2" />
                <div className="text-2xl font-bold text-gray-900">
                  {data.experience}+
                </div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>

              <div className="text-center">
                <Users className="w-8 h-8 mx-auto text-red-600 mb-2" />
                <div className="text-2xl font-bold text-gray-900">
                  {data.projectsCompleted}+
                </div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>

              <div className="text-center">
                <CheckCircle className="w-8 h-8 mx-auto text-red-600 mb-2" />
                <div className="text-2xl font-bold text-gray-900">
                  {data.happyClients}+
                </div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
              {data.highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="text-center p-4 bg-red-50 rounded-2xl shadow hover:shadow-lg transition-all duration-300">
                    <Icon className="w-6 h-6 text-red-600 mx-auto mb-2" />
                    <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <Link
              to="/about"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-red-600 text-white font-semibold rounded-full shadow hover:bg-red-700 transition-all duration-300 mt-6"
            >
              <span>Read More</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
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
