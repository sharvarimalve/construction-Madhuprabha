import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Home } from 'lucide-react';
import { projectsData } from '../mockData';

const CompletedProjects = () => {
  // अब 4 projects दिखेंगे
  const completedProjects = projectsData.filter(project => project.status === 'Completed').slice(0, 4);

  return (
<section className="bg-white relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Header */}
    <div className="text-center mb-12 sm:mb-16">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-6 leading-tight">
        Completed Projects
      </h2>
      <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
        Browse through our portfolio of successfully completed projects, showcasing our expertise and dedication to quality.
      </p>
    </div>

    {/* Projects Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
      {completedProjects.map((project) => (
        <div
          key={project.id}
          className="group relative bg-white rounded-3xl border border-gray-200 overflow-hidden shadow transition-all duration-500 hover:-translate-y-1"
        >
          {/* Project image */}
          <div className="relative h-56 sm:h-64 overflow-hidden rounded-t-3xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute top-4 sm:top-6 right-4 sm:right-6">
              <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-red-500 text-white text-xs sm:text-sm font-bold rounded-full">
                {project.status}
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <Link
                to={`/project/${project.id}`}
                className="p-3 sm:p-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transform hover:scale-110 transition-all duration-300"
              >
                <ArrowRight className="w-5 h-5 sm:w-7 sm:h-7" />
              </Link>
            </div>
          </div>

          {/* Project details */}
          <div className="p-4 sm:p-6 lg:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 line-clamp-2">
              {project.title}
            </h3>

            <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
              <div className="flex items-center text-gray-600 text-xs sm:text-sm">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-200 rounded-full flex items-center justify-center mr-2 sm:mr-3">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-gray-700" />
                </div>
                <span className="line-clamp-1">{project.location}</span>
              </div>
              <div className="flex items-center text-gray-600 text-xs sm:text-sm">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-200 rounded-full flex items-center justify-center mr-2 sm:mr-3">
                  <Home className="w-3 h-3 sm:w-4 sm:h-4 text-gray-700" />
                </div>
                <span className="line-clamp-1">{project.area} • {project.type}</span>
              </div>
            </div>

            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 line-clamp-3">
              {project.description}
            </p>

            <Link 
              to={`/project/${project.id}`}
              className="block text-center py-3 sm:py-4 px-4 sm:px-6 text-sm sm:text-base font-bold rounded-2xl bg-white text-red-600 border border-red-600 transition-all duration-300 hover:bg-red-600 hover:text-white"
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>

    {/* View All Projects */}
    <div className="text-center">
      <Link
        to="/projects"
        className="inline-flex items-center space-x-2 sm:space-x-4 px-8 sm:px-12 py-4 sm:py-6 font-bold text-base sm:text-lg rounded-full bg-white text-red-600 border border-red-600 transition-all duration-300 hover:bg-red-600 hover:text-white"
      >
        <span>View All Projects</span>
        <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </Link>
    </div>
  </div>
</section>

  );
};

export default CompletedProjects;
