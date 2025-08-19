import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const ImageLightbox = ({ images, currentIndex, isOpen, onClose, onNext, onPrev, onSelect }) => {
  if (!isOpen || !images || images.length === 0) return null;

  const currentImage = images[currentIndex];

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft') onPrev();
    if (e.key === 'ArrowRight') onNext();
  };

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/95 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      ></div>

      {/* Content */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto p-4 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-4">
            <h3 className="text-white text-xl font-bold">
              {currentImage.title || 'Gallery Image'}
            </h3>
            <div className="text-slate-300 text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
          
          <button 
            onClick={onClose}
            className="p-3 bg-slate-800/50 backdrop-blur-sm border border-slate-600/50 text-white rounded-xl hover:bg-slate-700/50 transition-colors duration-300"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Image */}
        <div className="flex-1 flex items-center justify-center relative min-h-0">
          <img
            src={currentImage.url || currentImage}
            alt={currentImage.title || 'Gallery Image'}
            className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
          />

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={onPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-4 bg-slate-800/80 backdrop-blur-sm border border-slate-600/50 text-white rounded-full hover:bg-slate-700/80 transition-all duration-300 transform hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={onNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-4 bg-slate-800/80 backdrop-blur-sm border border-slate-600/50 text-white rounded-full hover:bg-slate-700/80 transition-all duration-300 transform hover:scale-110"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="mt-6 flex justify-center">
            <div className="flex space-x-2 max-w-full overflow-x-auto pb-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => onSelect(index)} 
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    index === currentIndex 
                      ? 'border-amber-400 scale-110' 
                      : 'border-slate-600 hover:border-slate-400'
                  }`}
                >
                  <img
                    src={image.url || image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-fill"
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageLightbox;
