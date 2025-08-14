import React from 'react';
import Hero from '../components/Hero';
import FeaturedProjects from '../components/FeaturedProjects';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import { testimonials } from '../mockData';
import { Star, Quote } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedProjects />
      <AboutSection />
      <ContactSection />
      {/* Testimonials Section */}
      <section className="relative py-24 bg-gradient-to-br from-amber-50 via-white to-orange-50 overflow-hidden">
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute -top-16 -right-16 w-80 h-80 bg-gradient-to-br from-amber-300/40 to-orange-400/40 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-br from-yellow-300/30 to-amber-400/30 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center space-x-2 px-6 py-2 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-200/60 shadow-sm mb-6">
              <Quote className="w-4 h-4 text-amber-600" />
              <span className="text-sm font-semibold text-amber-700 tracking-wide">Testimonials</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
              Real stories from homeowners who trusted us to build their dreams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <div
                key={t.id}
                className="group relative bg-white rounded-3xl p-8 shadow-xl border border-amber-100/60 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                {/* Glow */}
                <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-amber-200/0 via-orange-200/0 to-yellow-200/0 blur opacity-0 group-hover:opacity-100 group-hover:from-amber-200/40 group-hover:via-orange-200/40 group-hover:to-yellow-200/40 transition-opacity duration-500" />

                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-400" />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-amber-400/70" />
                  </div>

                  <p className="text-slate-700 leading-relaxed mb-6">
                    “{t.text}”
                  </p>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold text-slate-900">{t.name}</div>
                      <div className="text-sm text-slate-500">{t.location} • {t.project}</div>
                    </div>
                    <div className="px-3 py-1 text-xs font-semibold rounded-full bg-amber-100 text-amber-700 border border-amber-200">
                      Verified
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-14">
            <a
              href="#contact"
              className="group relative inline-flex items-center space-x-3 px-10 py-4 font-bold rounded-full overflow-hidden transition-all duration-500 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 transition-all duration-500 group-hover:from-yellow-400 group-hover:via-amber-500 group-hover:to-orange-600" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full blur opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
              <span className="relative z-10 text-white">Start Your Project With Us</span>
            </a>
          </div>
        </div>
      </section>
      <Gallery />
      <Footer />
    </div>
  );
};

export default HomePage;