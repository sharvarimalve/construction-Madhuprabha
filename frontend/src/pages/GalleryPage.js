import React, { useState } from 'react';
import { Image as ImageIcon, Video, Play, ExternalLink, Grid, List, Search, Filter, X } from 'lucide-react';
import { galleryImages, galleryVideos } from '../mockData';
import Footer from '../components/Footer';
import ImageLightbox from '../components/ImageLightbox'; // Import ImageLightbox
// import useScrollLock from '../hooks/use-scroll-lock'; // Import useScrollLock

const GalleryPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeVideo, setActiveVideo] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(-1); // New state for lightbox

  // Use the custom hook to manage body scroll based on lightbox or video state
  // useScrollLock(activeVideo !== null || selectedImageIndex !== -1);

  React.useEffect(() => {
    if (activeVideo !== null || selectedImageIndex !== -1) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [activeVideo, selectedImageIndex]);

  const allGalleryItems = [
    ...galleryImages.map(item => ({ ...item, category: 'image' })),
    ...galleryVideos.map(item => ({ ...item, category: 'video' }))
  ];

  const filteredItems = allGalleryItems.filter(item => {
    const matchesTab = activeTab === 'all' || item.category === activeTab;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const categories = [
    { id: 'all', name: 'All Media', icon: Grid },
    { id: 'image', name: 'Images', icon: ImageIcon },
    { id: 'video', name: 'Videos', icon: Video }
  ];

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
              Project
            </span>
            <br />
            <span className="text-white">Gallery</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Dive deep into our construction journey through detailed images and videos that showcase our craftsmanship, progress, and final results.
          </p>
        </div>
      </section>

      {/* Controls & Filters */}
      <section className="py-12 bg-white border-b border-gray-200  top-20 z-40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-6 lg:space-y-0">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveTab(category.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                      activeTab === category.id
                        ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg transform scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-orange-50 hover:text-orange-600'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{category.name}</span>
                  </button>
                );
              })}
            </div>            
          </div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-full object-fill group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        item.category === 'video' 
                          ? 'bg-red-500 text-white' 
                          : 'bg-blue-500 text-white'
                      }`}>
                        {item.category === 'video' ? 'Video' : 'Image'}
                      </span>
                    </div>

                    {/* Video Duration */}
                    {item.category === 'video' && item.duration && (
                      <div className="absolute top-4 right-4 px-2 py-1 bg-black/70 backdrop-blur-sm text-white text-xs font-medium rounded">
                        {item.duration}
                      </div>
                    )}

                    {/* Play Button for Videos */}
                    {item.category === 'video' && (
                      <div 
                        className="absolute inset-0 flex items-center justify-center cursor-pointer"
                        onClick={() => setActiveVideo(item.url)}
                      >
                        <Play className="w-16 h-16 text-white ml-1" />
                        <iframe
                          src={item.url}
                          title={item.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full absolute inset-0"
                        ></iframe>
                        
                      </div>
                    )}

                    {/* Action Button for Images */}
                    {item.category === 'image' && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button 
                          onClick={() => setSelectedImageIndex(galleryImages.findIndex(image => image.id === item.id))} // Open lightbox
                          className="p-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full hover:bg-white/30 transform hover:scale-110 transition-all duration-300">
                          <ExternalLink className="w-6 h-6" />
                        </button>
                      </div>
                    )}

                    {/* Title */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 break-inside-avoid ${
                    index % 4 === 0 ? 'h-80' : index % 3 === 0 ? 'h-64' : 'h-72'
                  }`}
                >
                  <div className="relative h-full overflow-hidden">
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        item.category === 'video' 
                          ? 'bg-red-500 text-white' 
                          : 'bg-blue-500 text-white'
                      }`}>
                        {item.category === 'video' ? 'Video' : 'Image'}
                      </span>
                    </div>

                    {item.category === 'video' && item.duration && (
                      <div className="absolute top-4 right-4 px-2 py-1 bg-black/70 backdrop-blur-sm text-white text-xs font-medium rounded">
                        {item.duration}
                      </div>
                    )}

                    {item.category === 'video' && (
                      <div 
                        className="absolute inset-0 flex items-center justify-center cursor-pointer"
                        onClick={() => setActiveVideo(item.url)}
                      >
                        <Play className="w-12 h-12 text-white ml-1" />
                        <iframe
                          src={item.url}
                          title={item.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full absolute inset-0"
                        ></iframe>
                        
                      </div>
                    )}

                    {item.category === 'image' && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button 
                          onClick={() => setSelectedImageIndex(galleryImages.findIndex(image => image.id === item.id))} // Open lightbox
                          className="p-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full hover:bg-white/30 transform hover:scale-110 transition-all duration-300">
                          <ExternalLink className="w-5 h-5" />
                        </button>
                      </div>
                    )}

                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-white font-semibold">{item.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No items found</h3>
              <p className="text-gray-600 max-w-md mx-auto">
                Try adjusting your search or filter criteria to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />

      {/* Image Lightbox */}
      <ImageLightbox
        images={galleryImages}
        currentIndex={selectedImageIndex}
        isOpen={selectedImageIndex !== -1}
        onClose={() => setSelectedImageIndex(-1)}
        onNext={() => setSelectedImageIndex(prev => (prev + 1) % galleryImages.length)}
        onPrev={() => setSelectedImageIndex(prev => (prev - 1 + galleryImages.length) % galleryImages.length)}
      />
    </div>
  );
};

export default GalleryPage;