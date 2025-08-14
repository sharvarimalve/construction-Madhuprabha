import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Home, Calendar, User, DollarSign, Award, CheckCircle, ExternalLink, Clock, TrendingUp } from 'lucide-react';
import { projectsData, currentProjectsData } from '../mockData';
import Footer from '../components/Footer';
import ImageLightbox from '../components/ImageLightbox';

const ProjectDetailPage = () => {
  const { id } = useParams();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Find project in both completed and current projects
  const allProjects = [...projectsData, ...currentProjectsData];
  const project = allProjects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen pt-28 bg-slate-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-amber-600 hover:text-amber-700 font-semibold">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const isCurrentProject = project.status === 'In Progress';

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-orange-500 rounded-full blur-2xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            to={isCurrentProject ? "/current-projects" : "/projects"}
            className="group inline-flex items-center space-x-2 mb-8 text-slate-300 hover:text-amber-300 transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span>Back to {isCurrentProject ? 'Current Projects' : 'Projects'}</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Project Info */}
            <div>
              <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full mb-6 ${
                isCurrentProject 
                  ? 'bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-400/30'
                  : 'bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-400/30'
              }`}>
                {isCurrentProject ? (
                  <Clock className="w-4 h-4 text-emerald-400" />
                ) : (
                  <CheckCircle className="w-4 h-4 text-amber-400" />
                )}
                <span className={`text-sm font-semibold ${
                  isCurrentProject ? 'text-emerald-300' : 'text-amber-300'
                }`}>
                  {project.status}
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <span className={`bg-gradient-to-r ${
                  isCurrentProject 
                    ? 'from-emerald-400 to-green-500' 
                    : 'from-amber-400 to-yellow-500'
                } bg-clip-text text-transparent`}>
                  {project.title}
                </span>
              </h1>

              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                {project.description}
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-600/30">
                  <div className="text-2xl font-bold text-white mb-1">{project.area}</div>
                  <div className="text-slate-400 text-sm">Total Area</div>
                </div>
                <div className="p-4 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-600/30">
                  <div className="text-2xl font-bold text-white mb-1">{project.budget}</div>
                  <div className="text-slate-400 text-sm">Project Value</div>
                </div>
              </div>
            </div>

            {/* Main Project Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-96 object-fill cursor-pointer"
                  onClick={() => openLightbox(0)}
                />
                
                {/* Progress overlay for current projects */}
                {isCurrentProject && (
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-slate-900/80 backdrop-blur-sm rounded-2xl p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-semibold">Progress</span>
                        <span className="text-emerald-400 font-bold">{project.progress}</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div 
                          className="h-full bg-gradient-to-r from-emerald-500 to-green-600 rounded-full"
                          style={{ width: project.progress }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Project Description */}
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-200/50">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Project Overview</h2>
                <p className="text-lg text-slate-700 leading-relaxed whitespace-pre-line">
                  {project.fullDescription}
                </p>
              </div>

              {/* Features */}
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-200/50">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors duration-300">
                      <CheckCircle className={`w-6 h-6 mt-0.5 flex-shrink-0 ${
                        isCurrentProject ? 'text-emerald-500' : 'text-amber-500'
                      }`} />
                      <span className="text-slate-700 leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Gallery */}
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-200/50">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Project Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {project.gallery.map((image, index) => (
                    <div
                      key={index}
                      className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer transform hover:scale-105 transition-transform duration-300"
                      onClick={() => openLightbox(index)}
                    >
                      <img
                        src={image}
                        alt={`${project.title} - Image ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <ExternalLink className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project Info Card */}
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-200/50 sticky top-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Project Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-slate-500 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-900">Location</div>
                      <div className="text-slate-600">{project.location}</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Home className="w-6 h-6 text-slate-500 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-900">Type</div>
                      <div className="text-slate-600">{project.type}</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Calendar className="w-6 h-6 text-slate-500 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-900">
                        {isCurrentProject ? 'Expected Completion' : 'Completed'}
                      </div>
                      <div className="text-slate-600">
                        {isCurrentProject ? project.expectedCompletion : project.completionDate}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <User className="w-6 h-6 text-slate-500 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-900">Client</div>
                      <div className="text-slate-600">{project.client}</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Award className="w-6 h-6 text-slate-500 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-900">Architect</div>
                      <div className="text-slate-600">{project.architect}</div>
                    </div>
                  </div>

                  {isCurrentProject && (
                    <div className="flex items-start space-x-4">
                      <TrendingUp className="w-6 h-6 text-slate-500 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-slate-900">Progress</div>
                        <div className="text-slate-600">{project.progress}</div>
                        <div className="mt-2 w-full bg-slate-200 rounded-full h-2">
                          
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* CTA Button */}
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <Link
                    to="/contact"
                    className={`group relative w-full py-4 px-6 font-bold rounded-2xl overflow-hidden transition-all duration-500 transform hover:scale-105 flex items-center justify-center space-x-2`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${
                      isCurrentProject 
                        ? 'from-emerald-500 via-green-500 to-teal-500 group-hover:from-green-400 group-hover:via-emerald-500 group-hover:to-teal-600'
                        : 'from-amber-500 via-yellow-500 to-orange-500 group-hover:from-yellow-400 group-hover:via-amber-500 group-hover:to-orange-600'
                    } transition-all duration-500`}></div>
                    
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    
                    <div className={`absolute -inset-1 bg-gradient-to-r ${
                      isCurrentProject ? 'from-emerald-400 to-green-500' : 'from-amber-400 to-yellow-500'
                    } rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-500`}></div>
                    
                    <span className="relative z-10 text-white">Get Similar Project</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Lightbox */}
      <ImageLightbox
        images={project.gallery}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={nextImage}
        onPrev={prevImage}
      />

      <Footer />
    </div>
  );
};

export default ProjectDetailPage;