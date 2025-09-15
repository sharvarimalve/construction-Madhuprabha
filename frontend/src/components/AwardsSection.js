import React from 'react';
import { Trophy, Medal, Star, Award } from 'lucide-react';

const AwardsSection = () => {
  const awards = [
    {
      year: "2023",
      title: "Best Construction Company",
      organization: "Indian Construction Awards",
      icon: <Trophy className="w-8 h-8" />,
      description: "Recognized for outstanding quality and innovation in construction"
    },
    {
      year: "2022",
      title: "Excellence in Sustainable Construction",
      organization: "Green Building Council",
      icon: <Medal className="w-8 h-8" />,
      description: "Leading the way in eco-friendly construction practices"
    },
    {
      year: "2021",
      title: "Customer Satisfaction Award",
      organization: "Construction Industry Federation",
      icon: <Star className="w-8 h-8" />,
      description: "Maintaining 100% customer satisfaction for three consecutive years"
    },
    {
      year: "2020",
      title: "Innovation in Technology",
      organization: "Smart Construction Summit",
      icon: <Award className="w-8 h-8" />,
      description: "Pioneering use of advanced construction technologies"
    }
  ];

  const mediaLogos = [
    { name: "Forbes India", logo: "https://via.placeholder.com/120x60/1e40af/ffffff?text=Forbes" },
    { name: "Construction Week", logo: "https://via.placeholder.com/120x60/dc2626/ffffff?text=ConWeek" },
    { name: "Economic Times", logo: "https://via.placeholder.com/120x60/059669/ffffff?text=ET" },
    { name: "Business Standard", logo: "https://via.placeholder.com/120x60/7c2d12/ffffff?text=BS" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Awards Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Awards & <span className="text-red-600">Recognition</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our commitment to excellence has been recognized by industry leaders and prestigious organizations.
          </p>
        </div>

        {/* Awards Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {awards.map((award, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100 h-full flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="flex items-start space-x-4 flex-1">
                  <div className="p-3 bg-gradient-to-br from-red-500 to-red-700 text-white rounded-xl group-hover:scale-110 transition-transform duration-300">
                    {award.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-slate-800 group-hover:text-red-600 transition-colors duration-300">
                        {award.title}
                      </h3>
                      <span className="text-sm font-medium text-red-600 bg-red-100 px-3 py-1 rounded-full">
                        {award.year}
                      </span>
                    </div>
                    <p className="text-red-600 font-medium mb-3">{award.organization}</p>
                    <p className="text-slate-600 leading-relaxed">{award.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Media Coverage */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-slate-800 mb-6">As Featured In</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {mediaLogos.map((media, index) => (
              <div
                key={index}
                className="group cursor-pointer bg-white rounded-xl shadow-md p-4 border border-slate-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-center">
                  <img
                    src={media.logo}
                    alt={media.name}
                    className="mx-auto opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 rounded-lg"
                  />
                </div>
                <p className="mt-3 text-sm font-semibold text-slate-600 group-hover:text-red-600 transition-colors duration-300">
                  {media.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-red-800 to-red-700 text-white rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold mb-4">Ready to Work with Award-Winning Experts?</h3>
          <p className="text-xl text-slate-300 mb-6 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have trusted us with their most important construction projects.
          </p>
          <button className="bg-gradient-to-r from-red-500 to-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-red-600 hover:to-red-800 transition-all duration-300 transform hover:scale-105">
            Start Your Project Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
