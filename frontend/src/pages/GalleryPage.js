import React, { useState } from 'react';
import { Image as ImageIcon, Video, Play, ExternalLink, Grid, Search, Award, Newspaper, Users } from 'lucide-react';
import { galleryImages, galleryVideos } from '../mockData';
import Footer from '../components/Footer';
import ImageLightbox from '../components/ImageLightbox';
import AwardsPage from './AwardsPage';
import PressPage from './PressPage';
import CsrActivity from './CsrActivity';

const GalleryPage = () => {
  const [activeGalleryTab, setActiveGalleryTab] = useState('gallery');
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

  // 🔥 Filter based on top tabs only
  const filteredItems = allGalleryItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());

    if (activeGalleryTab === 'gallery') return matchesSearch;
    if (activeGalleryTab === 'image') return item.category === 'image' && matchesSearch;
    if (activeGalleryTab === 'video') return item.category === 'video' && matchesSearch;

    return false;
  });

  const galleryTabs = [
    { id: 'gallery', name: 'Gallery', icon: Grid },
    { id: 'awards', name: 'Awards', icon: Award },
    { id: 'press', name: 'Press', icon: Newspaper },
    { id: 'csr', name: 'CSR Activity', icon: Users },
    { id: 'image', name: 'Images', icon: ImageIcon },
    { id: 'video', name: 'Videos', icon: Video }
  ];

  return (
    <div className="min-h-screen text-white">
      {/* Hero Section */}
      <section 
        className="relative pt-28 pb-20 text-white overflow-hidden"
        style={{
          backgroundImage: "url('/images/gellary image.jpg')",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: '60vh',
        }}
      >
        {/* White blur lights */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-48 sm:w-96 h-48 sm:h-96 bg-white rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-40 sm:w-64 h-40 sm:h-64 bg-white rounded-full blur-2xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold leading-tight mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-white to-red-200 bg-clip-text text-transparent">
              Media
            </span>
            <span className="text-white"> Gallery</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl sm:max-w-4xl mx-auto leading-relaxed font-bold">
  Explore our achievements, press coverage, and social impact through our comprehensive media collection.
</p>

        </div>
      </section>

      {/* Main Gallery Tabs */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-20 z-40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {galleryTabs.map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveGalleryTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeGalleryTab === tab.id
                      ? 'bg-red-600 text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-red-600'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{tab.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Content */}
      {['gallery', 'image', 'video'].includes(activeGalleryTab) && (
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
              // LIST VIEW
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
      )}

      {/* Awards Tab */}
      {activeGalleryTab === 'awards' && <AwardsPage />}
      {/* Press Tab */}
      {activeGalleryTab === 'press' && <PressPage />}
      {/* CSR Tab */}
      {activeGalleryTab === 'csr' && (
        <CsrActivity />
      )}

      {/* Lightbox */}
      {['gallery','image'].includes(activeGalleryTab) && (
        <ImageLightbox
          images={galleryImages}
          currentIndex={selectedImageIndex}
          isOpen={selectedImageIndex !== -1}
          onClose={() => setSelectedImageIndex(-1)}
          onNext={() => setSelectedImageIndex((prev) => (prev + 1) % galleryImages.length)}
          onPrev={() => setSelectedImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)}
        />
      )}

      {/* Video Lightbox */}
      {['gallery','video'].includes(activeGalleryTab) && activeVideo && (
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
