import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Image as ImageIcon, Video, Play, ExternalLink, Sparkles } from 'lucide-react';
import { galleryImages, galleryVideos } from '../mockData';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('images');

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-20 w-80 h-80 bg-gradient-to-br from-amber-500/10 to-yellow-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 right-32 w-64 h-64 bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-yellow-500/5 to-orange-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 backdrop-blur-sm border border-amber-400/30 rounded-full mb-8 shadow-lg">
            <Sparkles className="w-5 h-5 text-amber-400 animate-pulse" />
            <span className="text-amber-300 font-bold text-sm uppercase tracking-wider">Our Gallery</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Project
            </span>
            <br />
            <span className="text-white">Showcase</span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Explore our construction journey through images and videos that capture the essence 
            of quality craftsmanship and architectural excellence.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-16">
          <div className="relative inline-flex bg-slate-800/50 backdrop-blur-sm border border-slate-600/50 rounded-3xl p-2 shadow-xl">
            {/* Curved background accent */}
            <div className="absolute top-0 left-0 right-0 h-2">
              <svg className="w-full h-full" viewBox="0 0 300 8" preserveAspectRatio="none">
                <path d="M0,8 Q150,0 300,8 L300,0 L0,0 Z" fill="url(#tabGradient)" />
                <defs>
                  <linearGradient id="tabGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#f59e0b', stopOpacity: 0.6 }} />
                    <stop offset="50%" style={{ stopColor: '#d97706', stopOpacity: 0.6 }} />
                    <stop offset="100%" style={{ stopColor: '#b45309', stopOpacity: 0.6 }} />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <button
              onClick={() => setActiveTab('images')}
              className={`relative flex items-center space-x-3 px-8 py-4 rounded-2xl font-bold transition-all duration-500 ${
                activeTab === 'images'
                  ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-900 shadow-xl transform scale-105'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <ImageIcon className="w-6 h-6" />
              <span>Images</span>
              {activeTab === 'images' && (
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-2xl blur opacity-30 animate-pulse"></div>
              )}
            </button>
            
            <button
              onClick={() => setActiveTab('videos')}
              className={`relative flex items-center space-x-3 px-8 py-4 rounded-2xl font-bold transition-all duration-500 ${
                activeTab === 'videos'
                  ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-900 shadow-xl transform scale-105'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <Video className="w-6 h-6" />
              <span>Videos</span>
              {activeTab === 'videos' && (
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-2xl blur opacity-30 animate-pulse"></div>
              )}
            </button>
          </div>
        </div>

        {/* Gallery Content */}
        <div className="mb-16">
          {activeTab === 'images' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryImages.map((item, index) => (
                <div
                  key={item.id}
                  className="group relative bg-slate-800/50 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 border border-slate-600/30"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Curved top accent */}
                  <div className="absolute top-0 left-0 right-0 h-4">
                    <svg className="w-full h-full" viewBox="0 0 300 16" preserveAspectRatio="none">
                      <path d="M0,16 Q150,0 300,16 L300,0 L0,0 Z" fill="url(#galleryGradient)" />
                      <defs>
                        <linearGradient id="galleryGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" style={{ stopColor: '#f59e0b', stopOpacity: 0.8 }} />
                          <stop offset="50%" style={{ stopColor: '#d97706', stopOpacity: 0.8 }} />
                          <stop offset="100%" style={{ stopColor: '#b45309', stopOpacity: 0.8 }} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <button className="group/btn p-4 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full hover:bg-white/30 transform hover:scale-110 transition-all duration-300 shadow-xl">
                        <ExternalLink className="w-7 h-7" />
                      </button>
                    </div>

                    {/* Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-white font-bold text-xl">{item.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'videos' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {galleryVideos.map((video, index) => (
                <div
                  key={video.id}
                  className="group relative bg-slate-800/50 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 border border-slate-600/30"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Curved top accent */}
                  <div className="absolute top-0 left-0 right-0 h-4">
                    <svg className="w-full h-full" viewBox="0 0 400 16" preserveAspectRatio="none">
                      <path d="M0,16 Q200,0 400,16 L400,0 L0,0 Z" fill="url(#videoGradient)" />
                      <defs>
                        <linearGradient id="videoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" style={{ stopColor: '#dc2626', stopOpacity: 0.8 }} />
                          <stop offset="50%" style={{ stopColor: '#b91c1c', stopOpacity: 0.8 }} />
                          <stop offset="100%" style={{ stopColor: '#991b1b', stopOpacity: 0.8 }} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors duration-500"></div>
                    
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button className="group/play relative w-20 h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-all duration-500">
                        <Play className="w-8 h-8 text-white ml-1 group-hover/play:scale-110 transition-transform duration-300" />
                        <div className="absolute -inset-2 bg-gradient-to-r from-red-400 to-red-500 rounded-full blur opacity-40 group-hover/play:opacity-70 transition-opacity duration-500 animate-pulse"></div>
                      </button>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute top-6 right-6 px-3 py-1 bg-slate-900/80 backdrop-blur-sm text-white text-sm font-bold rounded-full border border-white/20">
                      {video.duration}
                    </div>

                    {/* Title */}
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 to-transparent rounded-b-3xl"></div>
                      <h3 className="relative text-white font-bold text-2xl mb-2">{video.title}</h3>
                      <p className="relative text-slate-300">Click to watch video</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/gallery"
            className="group relative inline-flex items-center space-x-4 px-12 py-6 font-bold text-xl rounded-full overflow-hidden transition-all duration-500 transform hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 transition-all duration-500 group-hover:from-yellow-400 group-hover:via-amber-500 group-hover:to-orange-600"></div>
            
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            <div className="absolute -inset-2 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full blur opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
            
            <span className="relative z-10 text-slate-900">View Full Gallery</span>
            <ArrowRight className="relative z-10 w-6 h-6 text-slate-900 group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;