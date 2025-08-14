import React from 'react';
import Hero from '../components/Hero';
import FeaturedProjects from '../components/FeaturedProjects';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedProjects />
      <AboutSection />
      <ContactSection />
      <Gallery />
      <Footer />
    </div>
  );
};

export default HomePage;