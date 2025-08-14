import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Building2, CheckCircle, Target, Eye, Sparkles } from 'lucide-react';
import { aboutUsData } from '../mockData';

const AboutSection = () => {
  const features = [
    { icon: Award, title: "Quality Assurance", description: "Premium materials and craftsmanship", color: "from-amber-500 to-yellow-600" },
    { icon: Users, title: "Expert Team", description: "Experienced architects and engineers", color: "from-orange-500 to-amber-600" },
    { icon: Target, title: "Timely Delivery", description: "Projects completed on schedule", color: "from-yellow-500 to-orange-600" },
    { icon: Building2, title: "Modern Design", description: "Contemporary residential architecture", color: "from-amber-600 to-yellow-500" }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white via-slate-50 to-amber-50/30 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-32 w-80 h-80 bg-gradient-to-br from-amber-200/15 to-yellow-300/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 right-40 w-64 h-64 bg-gradient-to-br from-orange-200/15 to-amber-300/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Content Side */}
          <div className="space-y-10">
            <div>
              <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-amber-100/80 to-yellow-100/80 backdrop-blur-sm border border-amber-200/50 rounded-full mb-8 shadow-lg">
                <Sparkles className="w-5 h-5 text-amber-600 animate-pulse" />
                <span className="text-slate-700 font-bold text-sm uppercase tracking-wider">About Us</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
                Building Dreams with{' '}
                <span className="bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 bg-clip-text text-transparent">
                  Excellence
                </span>
              </h2>
              
              <p className="text-xl text-slate-600 leading-relaxed">
                {aboutUsData.shortDescription}
              </p>
            </div>

            {/* Stats with curved design */}
            <div className="grid grid-cols-2 gap-6">
              <div className="group relative p-8 bg-gradient-to-br from-white to-amber-50/50 rounded-3xl border border-amber-200/30 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="absolute top-0 left-0 right-0 h-3">
                  <svg className="w-full h-full" viewBox="0 0 200 12" preserveAspectRatio="none">
                    <path d="M0,12 Q100,0 200,12 L200,0 L0,0 Z" fill="url(#statGradient1)" />
                    <defs>
                      <linearGradient id="statGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: '#f59e0b', stopOpacity: 0.8 }} />
                        <stop offset="100%" style={{ stopColor: '#d97706', stopOpacity: 0.8 }} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {aboutUsData.experience}
                </div>
                <div className="text-slate-700 font-semibold">Experience</div>
              </div>
              
              <div className="group relative p-8 bg-gradient-to-br from-white to-amber-50/50 rounded-3xl border border-amber-200/30 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="absolute top-0 left-0 right-0 h-3">
                  <svg className="w-full h-full" viewBox="0 0 200 12" preserveAspectRatio="none">
                    <path d="M0,12 Q100,0 200,12 L200,0 L0,0 Z" fill="url(#statGradient2)" />
                    <defs>
                      <linearGradient id="statGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: '#d97706', stopOpacity: 0.8 }} />
                        <stop offset="100%" style={{ stopColor: '#b45309', stopOpacity: 0.8 }} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {aboutUsData.projectsCompleted}
                </div>
                <div className="text-slate-700 font-semibold">Projects</div>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="group flex items-start space-x-4 p-6 rounded-2xl hover:bg-white/60 hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1">
                    <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2 text-lg group-hover:text-amber-600 transition-colors duration-300">{feature.title}</h4>
                      <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <Link
              to="/about"
              className="group relative inline-flex items-center space-x-4 px-10 py-5 font-bold text-lg rounded-full overflow-hidden transition-all duration-500 transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 transition-all duration-500 group-hover:from-amber-500 group-hover:via-yellow-500 group-hover:to-orange-500"></div>
              
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <div className="absolute -inset-2 bg-gradient-to-r from-slate-600 to-slate-500 group-hover:from-amber-400 group-hover:to-yellow-500 rounded-full blur opacity-30 group-hover:opacity-60 transition-all duration-500"></div>
              
              <span className="relative z-10 text-white group-hover:text-slate-900 transition-colors duration-300">Read More</span>
              <ArrowRight className="relative z-10 w-6 h-6 text-white group-hover:text-slate-900 group-hover:translate-x-2 transition-all duration-300" />
            </Link>
          </div>

          {/* Image Side */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Image with curved frame */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-700">
                <img
                  src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=600&h=450&fit=crop"
                  alt="Construction Excellence"
                  className="w-full h-96 object-cover"
                />
                
                {/* Curved overlay */}
                <div className="absolute inset-0">
                  <div className="absolute bottom-0 left-0 right-0 h-20">
                    <svg className="w-full h-full" viewBox="0 0 400 80" preserveAspectRatio="none">
                      <path
                        d="M0,80 L0,40 Q200,0 400,40 L400,80 Z"
                        fill="url(#imageOverlay)"
                      />
                      <defs>
                        <linearGradient id="imageOverlay" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" style={{ stopColor: '#1e293b', stopOpacity: 0.8 }} />
                          <stop offset="50%" style={{ stopColor: '#334155', stopOpacity: 0.6 }} />
                          <stop offset="100%" style={{ stopColor: '#475569', stopOpacity: 0.8 }} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-3xl shadow-2xl p-8 border border-slate-200/50 backdrop-blur-sm transform hover:scale-105 transition-transform duration-500">
                <div className="absolute top-0 left-0 right-0 h-3">
                  <svg className="w-full h-full" viewBox="0 0 200 12" preserveAspectRatio="none">
                    <path d="M0,12 Q100,0 200,12 L200,0 L0,0 Z" fill="url(#cardGradient)" />
                    <defs>
                      <linearGradient id="cardGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: '#10b981', stopOpacity: 0.8 }} />
                        <stop offset="100%" style={{ stopColor: '#059669', stopOpacity: 0.8 }} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-slate-900">{aboutUsData.happyClients}</div>
                    <div className="text-slate-600 font-medium">Happy Clients</div>
                  </div>
                </div>
              </div>

              {/* Floating Location Badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-white px-6 py-3 rounded-full shadow-xl backdrop-blur-sm border border-white/20 animate-pulse">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-white rounded-full animate-ping"></div>
                  <span className="font-bold">{aboutUsData.location}</span>
                </div>
              </div>
            </div>

            {/* Background Decorations */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-16 right-16 w-40 h-40 bg-gradient-to-br from-amber-300/20 to-yellow-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
              <div className="absolute bottom-24 left-24 w-32 h-32 bg-gradient-to-br from-orange-300/20 to-amber-400/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '5s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;