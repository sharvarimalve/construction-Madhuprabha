import React, { useState } from 'react';
import { MapPin, Home, Calendar, ExternalLink, Filter, Grid, List } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projectsData } from '../mockData';
import Footer from '../components/Footer';

const ProjectsPage = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('recent');

  const projectTypes = ['all'];

  const filteredProjects = projectsData.filter(project => 
    filter === 'all' || project.type.toLowerCase().includes(filter.toLowerCase())
  );

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sortBy === 'recent') {
      return new Date(b.completionDate) - new Date(a.completionDate);
    }
    if (sortBy === 'area') {
      return parseInt(b.area) - parseInt(a.area);
    }
    return 0;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-red-500 rounded-full blur-2xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Completed
            </span>
            <br />
            <span className="text-white">Projects</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of successfully completed residential construction projects that showcase our commitment to quality, innovation, and customer satisfaction.
          </p>
        </div>
      </section>
      {/* Projects Grid */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedProjects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
                >
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full shadow-lg">
                        {project.status}
                      </span>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Link to={`/project/${project.id}`} className="p-3 bg-white/90 backdrop-blur-sm text-orange-600 rounded-full hover:bg-white transform hover:scale-110 transition-all duration-300 shadow-lg">
                        <ExternalLink className="w-6 h-6" />
                      </Link>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-600 text-sm">
                        <MapPin className="w-4 h-4 mr-2 text-orange-500 flex-shrink-0" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <Home className="w-4 h-4 mr-2 text-orange-500 flex-shrink-0" />
                        <span>{project.area} • {project.type}</span>
                      </div>
                    </div>

                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <Link to={`/project/${project.id}`} className="w-full inline-block text-center py-3 px-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {sortedProjects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="flex flex-col lg:flex-row">
                    {/* Image */}
                    <div className="lg:w-1/3 h-64 lg:h-auto relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full shadow-lg">
                          {project.status}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:w-2/3 p-8 flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                          {project.title}
                        </h3>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                          <div className="flex items-center text-gray-600 text-sm">
                            <MapPin className="w-4 h-4 mr-2 text-orange-500" />
                            <span>{project.location}</span>
                          </div>
                          <div className="flex items-center text-gray-600 text-sm">
                            <Home className="w-4 h-4 mr-2 text-orange-500" />
                            <span>{project.area}</span>
                          </div>
                          <div className="flex items-center text-gray-600 text-sm">
                            <Calendar className="w-4 h-4 mr-2 text-orange-500" />
                            <span>{project.completionDate}</span>
                          </div>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6">
                          {project.description}
                        </p>

                        <div className="inline-flex px-3 py-1 bg-orange-100 text-orange-800 text-sm font-medium rounded-full">
                          {project.type}
                        </div>
                      </div>

                      <div className="flex justify-end mt-6">
                        <Link to={`/project/${project.id}`} className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center space-x-2">
                          <span>View Details</span>
                          <ExternalLink className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectsPage;