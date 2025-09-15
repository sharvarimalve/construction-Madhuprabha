import React, { useState } from 'react';
import { Newspaper, Calendar, ExternalLink } from 'lucide-react';
import Footer from '../components/Footer';

const PressPage = () => {
  const [previewImage, setPreviewImage] = useState(null);

  const pressReleases = [
    {
      id: 1,
      title: "CREDAI Nagpur Metro Urges Citizens to Avail PMAY Subsidy",
      date: "2022-03-31",
      summary: "CREDAI Nagpur Metro is encouraging citizens, especially those in the Lower Income Group (LIG), to use the Pradhan Mantri Awas Yojana (PMAY) Credit Linked Subsidy Scheme. The scheme provides a subsidy of up to ₹2.67 lakh on home loans",
      image: "/images/press-note-1.jpg",
    },
    {
      id: 2,
      title: "CREDAI Nagpur Metro Urges Citizens to Avail PMAY Subsidy",
      date: "2024-01-10",
      summary: "CREDAI Nagpur Metro is urging citizens to take advantage of the PMAY Credit Linked Subsidy Scheme before the March 31, 2022 deadline. According to the article, the scheme offers a ₹2.67 lakh subsidy on home loans for households with an annual income of up to ₹6 lakh",
      image: "/images/press-note-2.jpg",
    },
    {
      id: 3,
      title: "CREDAI Nagpur Metro Urges Citizens to Avail PMAY Subsidy",
      date: "2024-01-05",
      summary: "CREDAI Nagpur Metro is urging citizens to take advantage of the PMAY Credit Linked Subsidy Scheme before the March 31, 2022 deadline. According to the article, the scheme offers a ₹2.67 lakh subsidy on home loans for households with an annual income of up to ₹6 lakh",
      image: "/images/press-note-3.jpg",
    },
  ];

  const mediaCoverage = [
    {
      source: "Times of India",
      title: "Construction Industry Growth in Maharashtra",
      date: "2024-01-12",
      link: "#"
    },
    {
      source: "Economic Times",
      title: "Real Estate Development in Nagpur",
      date: "2024-01-08",
      link: "#"
    },
    {
      source: "Construction Today",
      title: "Innovative Construction Techniques",
      date: "2024-01-03",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Press Releases Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Press{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
                Releases
              </span>
            </h1>
            <p className="text-base sm:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto">
              Stay updated with our latest news, achievements, and company announcements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {pressReleases.map((release) => (
              <div
                key={release.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-red-100 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={release.image}
                    alt={release.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                    onClick={() => setPreviewImage(release.image)}
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(release.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {release.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {release.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Coverage Section */}
      {/* <section className="py-16 sm:py-20 bg-gradient-to-br from-white to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Media{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
                Coverage
              </span>
            </h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto">
              Our work and achievements featured in leading publications and media outlets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {mediaCoverage.map((coverage, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-red-100 p-6 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-sm font-semibold text-red-600">
                    {coverage.source}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(coverage.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric',
                      year: 'numeric'
                    })}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                  {coverage.title}
                </h3>
                
                <a
                  href={coverage.link}
                  className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-medium text-sm transition-colors"
                >
                  Read Article
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Image Preview Modal */}
      {previewImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative max-w-3xl w-full mx-4">
            <button
              onClick={() => setPreviewImage(null)}
              className="absolute top-3 right-3 bg-white text-black rounded-full p-2 shadow-lg hover:bg-gray-200"
            >
              ✕
            </button>
            <img
              src={previewImage}
              alt="Preview"
              className="w-full h-auto max-h-[80vh] rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default PressPage;
