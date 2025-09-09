import React, { useState } from 'react';
import { Image as ImageIcon, Video, Play, ExternalLink, Grid, List, Search } from 'lucide-react';
import { galleryImages, galleryVideos } from '../mockData';
import Footer from '../components/Footer';
import ImageLightbox from '../components/ImageLightbox';

const GalleryPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeVideo, setActiveVideo] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(-1);

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
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-white/20 rounded-full blur-2xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              Project
            </span>
            <br />
            <span className="text-white">Gallery</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Dive into our construction journey through detailed images and videos that showcase our craftsmanship, progress, and results.
          </p>
        </div>
      </section>

      {/* Controls & Filters */}
      <section className="py-8 bg-gray-900 border-b border-gray-700 sticky top-20 z-40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-6 lg:space-y-0">
            
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveTab(category.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                      activeTab === category.id
                        ? 'bg-red-600 text-white shadow-lg scale-105'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-red-400'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{category.name}</span>
                  </button>
                );
              })}
            </div>

            {/* View Toggle */}
            <div className="flex space-x-3">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-3 rounded-lg ${
                  viewMode === 'grid'
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-3 rounded-lg ${
                  viewMode === 'list'
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {viewMode === 'grid' ? (
            // GRID VIEW
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="group relative bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-red-600/40 transition-all duration-500 transform hover:-translate-y-2"
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

                    {/* Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        item.category === 'video' 
                          ? 'bg-red-600 text-white' 
                          : 'bg-white text-black'
                      }`}>
                        {item.category === 'video' ? 'Video' : 'Image'}
                      </span>
                    </div>

                    {/* Video Play */}
                    {item.category === 'video' && (
                      <div 
                        className="absolute inset-0 flex items-center justify-center cursor-pointer"
                        onClick={() => setActiveVideo(item.url)}
                      >
                        <Play className="w-16 h-16 text-white drop-shadow-lg" />
                      </div>
                    )}

                    {/* Image Open */}
                    {item.category === 'image' && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button 
                          onClick={() =>
                            setSelectedImageIndex(
                              galleryImages.findIndex(image => image.id === item.id)
                            )
                          }
                          className="p-3 bg-red-600/80 backdrop-blur-sm text-white rounded-full hover:bg-red-700 transform hover:scale-110 transition-all duration-300">
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
            // LIST (Masonry) VIEW
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="group relative bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-red-600/40 transition-all duration-500 transform hover:-translate-y-2 break-inside-avoid"
                >
                  <div className="relative h-full overflow-hidden">
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        item.category === 'video' 
                          ? 'bg-red-600 text-white' 
                          : 'bg-white text-black'
                      }`}>
                        {item.category === 'video' ? 'Video' : 'Image'}
                      </span>
                    </div>

                    {/* Video Play */}
                    {item.category === 'video' && (
                      <div 
                        className="absolute inset-0 flex items-center justify-center cursor-pointer"
                        onClick={() => setActiveVideo(item.url)}
                      >
                        <Play className="w-12 h-12 text-white drop-shadow-lg" />
                      </div>
                    )}

                    {/* Image Open */}
                    {item.category === 'image' && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button 
                          onClick={() =>
                            setSelectedImageIndex(
                              galleryImages.findIndex(image => image.id === item.id)
                            )
                          }
                          className="p-2 bg-red-600/80 text-white rounded-full hover:bg-red-700 transform hover:scale-110 transition-all duration-300">
                          <ExternalLink className="w-5 h-5" />
                        </button>
                      </div>
                    )}

                    {/* Title */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-white font-semibold">{item.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* No Items */}
          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">No items found</h3>
              <p className="text-gray-400 max-w-md mx-auto">
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
        onNext={() =>
          setSelectedImageIndex((prev) => (prev + 1) % galleryImages.length)
        }
        onPrev={() =>
          setSelectedImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
        }
      />

      {/* Video Lightbox */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <button 
            className="absolute top-6 right-6 text-white text-3xl font-bold"
            onClick={() => setActiveVideo(null)}
          >
            ✕
          </button>
          <div className="w-full max-w-4xl aspect-video">
            <iframe
              src={activeVideo}
              title="Video Player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
