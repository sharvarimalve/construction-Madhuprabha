import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, MapPin, Home, Calendar, ExternalLink } from 'lucide-react';
import { currentProjectsData } from '../mockData';



const FeaturedProjects = () => {
  const featuredProjects = currentProjectsData.slice(0, 2);
  const navigate = useNavigate();

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-8 sm:left-20 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-br from-amber-200/20 to-yellow-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-40 right-8 sm:right-32 w-36 sm:w-48 h-36 sm:h-48 bg-gradient-to-br from-orange-200/20 to-amber-300/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">


          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 mb-4 sm:mb-8 leading-tight">
            <span className="bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 bg-clip-text text-transparent">
              Current Projects
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed px-4">
            Explore our ongoing residential construction projects that demonstrate our commitment to
            excellence, innovation, and meticulous attention to detail.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden transform hover:-translate-y-4 border border-slate-200/50"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Curved top design */}
              <div className="absolute top-0 left-0 right-0 h-4">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 400 20"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,20 Q200,0 400,20 L400,0 L0,0 Z"
                    fill="url(#projectGradient)"
                  />
                  <defs>
                    <linearGradient id="projectGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{ stopColor: '#f59e0b', stopOpacity: 0.8 }} />
                      <stop offset="50%" style={{ stopColor: '#d97706', stopOpacity: 0.8 }} />
                      <stop offset="100%" style={{ stopColor: '#b45309', stopOpacity: 0.8 }} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Project Image */}
              <div className="relative h-56 sm:h-64 lg:h-72 overflow-hidden rounded-t-3xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-fill group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Status Badge */}
                <div className="absolute top-4 sm:top-6 right-4 sm:right-6">
                  <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white text-xs sm:text-sm font-bold rounded-full shadow-lg backdrop-blur-sm border border-white/20">
                    {project.status}
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <button
                    onClick={() => navigate(`/project/${project.id}`)}
                    className="group/btn p-3 sm:p-4 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full hover:bg-white/30 transform hover:scale-110 transition-all duration-300 shadow-xl"
                  >
                    <ExternalLink className="w-5 h-5 sm:w-7 sm:h-7" />
                  </button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-4 sm:p-6 lg:p-8 relative">
                {/* Decorative curve */}
                <div className="absolute top-0 left-0 right-0 h-2">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 400 10"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,0 Q200,10 400,0 L400,10 L0,10 Z"
                      fill="#f8fafc"
                    />
                  </svg>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4 group-hover:text-amber-600 transition-colors duration-500 line-clamp-2">
                  {project.title}
                </h3>

                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  <div className="flex items-center text-slate-600 text-xs sm:text-sm">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center mr-2 sm:mr-3">
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <span className="line-clamp-1">{project.location}</span>
                  </div>
                  <div className="flex items-center text-slate-600 text-xs sm:text-sm">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center mr-2 sm:mr-3">
                      <Home className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <span className="line-clamp-1">{project.area} • {project.type}</span>
                  </div>

                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6 max-w-md mx-auto">
                  <Link
                    to={`/project/${project.id}`}
                    className="group/btn relative w-full py-3 sm:py-4 px-4 sm:px-6 text-sm sm:text-base font-bold rounded-2xl overflow-hidden transition-all duration-500 transform hover:scale-105 block"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 transition-all duration-500 group-hover/btn:from-yellow-400 group-hover/btn:via-amber-500 group-hover/btn:to-orange-600"></div>

                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>

                    <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-2xl blur opacity-30 group-hover/btn:opacity-60 transition-opacity duration-500"></div>

                    <div className="relative z-10 flex items-center justify-center space-x-2 text-slate-900">
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </div>
                  </Link>
                  <a
                    href="/images/Prajakta-Park-E-Brochure-New-1_compressed.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn relative w-full py-3 sm:py-4 px-4 sm:px-6 text-sm sm:text-base font-bold rounded-2xl overflow-hidden transition-all duration-500 transform hover:scale-105 block"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 transition-all duration-500 group-hover/btn:from-yellow-400 group-hover/btn:via-amber-500 group-hover/btn:to-orange-600"></div>

                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>

                    <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-2xl blur opacity-30 group-hover/btn:opacity-60 transition-opacity duration-500"></div>

                    <div className="relative z-10 flex items-center justify-center space-x-2 text-slate-900">
                      <span>E-brochure</span>
                      <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        {/* <div className="text-center">
          <Link
            to="/projects"
            className="group relative inline-flex items-center space-x-2 sm:space-x-4 px-8 sm:px-12 py-4 sm:py-6 font-bold text-base sm:text-lg rounded-full overflow-hidden transition-all duration-500 transform hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 transition-all duration-500 group-hover:from-amber-500 group-hover:via-yellow-500 group-hover:to-orange-500"></div>
            
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            <div className="absolute -inset-2 bg-gradient-to-r from-slate-600 to-slate-500 group-hover:from-amber-400 group-hover:to-yellow-500 rounded-full blur opacity-30 group-hover:opacity-60 transition-all duration-500"></div>
            
            <span className="relative z-10 text-white group-hover:text-slate-900 transition-colors duration-300">View All Projects</span>
            <ArrowRight className="relative z-10 w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-slate-900 group-hover:translate-x-2 transition-all duration-300" />
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default FeaturedProjects;