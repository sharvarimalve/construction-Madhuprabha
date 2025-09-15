import React, { useState } from "react";
import Footer from "../components/Footer";

const CsrActivity = () => {
  const [previewImage, setPreviewImage] = useState(null);

  const csrData = [
    {
      id: 1,
      title: "Education Support",
      desc: "Building schools and providing educational resources in rural areas.",
      image: "/images/WhatsApp Image 2025-09-13 at 15.47.31_27785361.jpg",
    },
    {
      id: 2,
      title: "Health & Wellness",
      desc: "Supporting healthcare infrastructure and medical facilities.",
      image: "/images/WhatsApp Image 2025-09-13 at 15.48.30_30867601.jpg",
    },
    {
      id: 3,
      title: "Green Environment",
      desc: "Promoting sustainable construction and environmental conservation.",
      image: "/images/WhatsApp Image 2025-09-13 at 15.48.49_208038ba.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* CSR Activity Header */}
      <div className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              CSR{" "}
              <span className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
                Activity
              </span>
            </h1>
            <p className="text-base sm:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto">
              <h2 className="text-black font-bold">
                An initiative towards Mother Green:
              </h2>
              In every project, we have a plan to plant regularly 11 to 12 plants
              by the roadside or near the ongoing projects and maintain it till
              they achieve their strength.
            </p>
          </div>

          {/* CSR Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {csrData.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-red-100 overflow-hidden cursor-pointer"
                onClick={() => setPreviewImage(item.image)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Extra Image below cards */}
          <div className="mt-12 text-center">
            <h2 className="text-xl font-bold text-black mb-2">“PYAU” Facilities:</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              In every project, we install “PYAU”, which provides drinking water
              facilities to the workers on the construction site and also for all the
              other people who pass by.
            </p>

            {/* Image container */}
            <div className="max-w-lg mx-auto">
              <img
                src="/images/crs-1200x675.jpeg"
                alt="CSR Extra"
                className="w-full h-auto rounded-2xl shadow-lg cursor-pointer"
                onClick={() => setPreviewImage("/images/crs-1200x675.jpeg")}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Image Preview Modal */}
      {previewImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setPreviewImage(null)}
        >
          <div className="relative w-full h-full max-w-[95vw] max-h-[95vh]">
            <img
              src={previewImage}
              alt="Preview"
              className="w-full h-full object-contain rounded-xl shadow-2xl"
            />
            <button
              onClick={() => setPreviewImage(null)}
              className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-full shadow-lg hover:bg-red-700"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CsrActivity;
