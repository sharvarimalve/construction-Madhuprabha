import React from 'react';
import Hero from '../components/Hero';
import FeaturedProjects from '../components/FeaturedProjects';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import CompletedProjects from '../components/CompletedProjects';
import Footer from '../components/Footer';
import { testimonials } from '../mockData';
import { Star, Quote, ArrowRight } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero />
      <FeaturedProjects />
      <AboutSection />
      <ContactSection />
      <CompletedProjects />

      {/* Testimonials Section */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center space-x-2 px-6 py-2 rounded-full bg-gray-100 border border-gray-200 shadow-sm mb-6">
              <Quote className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-semibold text-gray-700 tracking-wide">Testimonials</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              Real stories from homeowners who trusted us to build their dreams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <div
                key={t.id}
                className="group relative bg-white rounded-3xl p-8 border border-gray-200 shadow transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-gray-300" />
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    “{t.text}”
                  </p>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold text-gray-900">{t.name}</div>
                      <div className="text-sm text-gray-500">{t.location} • {t.project}</div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-700" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-14">
            <a
              href="/contact"
              className="group relative inline-flex items-center space-x-3 px-10 py-4 font-bold rounded-full overflow-hidden transition-all duration-500 hover:scale-105 bg-white text-red-600 border border-red-600 hover:bg-red-600 hover:text-white"
            >
              <span className="relative z-10">Start Your Project With Us</span>
              <ArrowRight className="w-5 h-5 text-red-600 relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
