import React from 'react';
import homeBg from './public/home-bg.png';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Full Screen Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={homeBg}
          alt="Madam Cocoa Kitchen"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight animate-fade-in-up drop-shadow-lg">
            Guilt-Free <br />
            <span className="text-secondary">Indulgence</span>
          </h1>
          <h2 className="text-xl md:text-3xl font-sans text-white/90 font-medium drop-shadow-md">
            100% Maida-Free. 100% Refined Sugar-Free.
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
            Delicious desserts that support a conscious, healthy lifestyle without compromise on flavor.
          </p>
          <button
            className="bg-primary hover:bg-primary/90 text-white font-sans font-semibold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 mt-8 border-2 border-white/20 backdrop-blur-sm"
            onClick={() => window.location.href = '#menu'}
          >
            Explore Our Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;