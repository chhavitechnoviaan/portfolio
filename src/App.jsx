import React, { useState, useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SelectedWork from './components/SelectedWork';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoaded(true), 2300);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="portfolio-app bg-grid-white" style={{ minHeight: '100vh', position: 'relative', backgroundColor: '#FFFFFF' }}>
      <div className="paper-grain-overlay" />
      <CustomCursor />
      <Preloader isLoaded={isLoaded} />
      <Navbar />
      <main className="portfolio-main">
        <HeroSection />
        <SelectedWork />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
