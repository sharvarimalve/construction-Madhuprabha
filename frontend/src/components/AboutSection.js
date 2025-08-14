import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Building2, CheckCircle, Target, Eye } from 'lucide-react';
import { aboutUsData } from '../mockData';

const AboutSection = () => {
  const features = [
    { icon: Award, title: "Quality Assurance", description: "Premium materials and craftsmanship" },
    { icon: Users, title: "Expert Team", description: "Experienced architects and engineers" },
    { icon: Target, title: "Timely Delivery", description: "Projects completed on schedule" },
    { icon: Building2, title: "Modern Design", description: "Contemporary residential architecture" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 rounded-full mb-6">
                <span className="text-orange-700 font-semibold text-sm uppercase tracking-wider">About Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Building Dreams with{' '}
                <span className="bg-gradient-to-r from-orange-600 to-red-700 bg-clip-text text-transparent">
                  Excellence
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {aboutUsData.shortDescription}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border border-orange-100">
                <div className="text-3xl font-bold text-orange-600 mb-2">{aboutUsData.experience}</div>
                <div className="text-gray-700 font-medium">Experience</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border border-orange-100">
                <div className="text-3xl font-bold text-orange-600 mb-2">{aboutUsData.projectsCompleted}</div>
                <div className="text-gray-700 font-medium">Projects</div>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-3 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <Link
              to="/about"
              className="group inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-full hover:from-orange-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              <span>Read More</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* Image Side */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=600&h=400&fit=crop&crop=center"
                  alt="Construction Excellence"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/20 to-transparent"></div>
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{aboutUsData.happyClients}</div>
                    <div className="text-sm text-gray-600">Happy Clients</div>
                  </div>
                </div>
              </div>

              {/* Floating Location Badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-2 rounded-full shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">{aboutUsData.location}</span>
                </div>
              </div>
            </div>

            {/* Background Decorations */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-orange-200 to-red-300 rounded-full blur-3xl opacity-30"></div>
              <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-amber-200 to-orange-300 rounded-full blur-2xl opacity-40"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;