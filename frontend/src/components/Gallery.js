import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Image as ImageIcon, Video, Play, ExternalLink } from 'lucide-react';
import { galleryImages, galleryVideos } from '../mockData';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('images');

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-600/20 backdrop-blur-sm border border-orange-500/30 rounded-full mb-6">
            <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">Our Gallery</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Project Showcase
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our construction journey through images and videos that capture the essence 
            of quality craftsmanship and architectural excellence.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-2">
            <button
              onClick={() => setActiveTab('images')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'images'
                  ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              <ImageIcon className="w-5 h-5" />
              <span>Images</span>
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'videos'
                  ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              <Video className="w-5 h-5" />
              <span>Videos</span>
            </button>
          </div>
        </div>

        {/* Gallery Content */}
        <div className="mb-12">
          {activeTab === 'images' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((item, index) => (
                <div
                  key={item.id}
                  className="group relative bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="p-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full hover:bg-white/30 transform hover:scale-110 transition-all duration-300">
                        <ExternalLink className="w-6 h-6" />
                      </button>
                    </div>

                    {/* Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'videos' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {galleryVideos.map((video, index) => (
                <div
                  key={video.id}
                  className="group relative bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                    
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button className="group/play w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-all duration-300">
                        <Play className="w-6 h-6 text-white ml-1 group-hover/play:scale-110 transition-transform duration-300" />
                      </button>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute top-4 right-4 px-2 py-1 bg-black/70 backdrop-blur-sm text-white text-xs font-medium rounded">
                      {video.duration}
                    </div>

                    {/* Title */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                      <h3 className="text-white font-semibold text-xl mb-1">{video.title}</h3>
                      <p className="text-gray-300 text-sm">Click to watch video</p>
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
            className="group inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-full hover:from-amber-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-xl"
          >
            <span>View Full Gallery</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;