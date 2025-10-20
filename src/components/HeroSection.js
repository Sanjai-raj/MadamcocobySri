import React from 'react';
import './HeroSection.css'; // Component-specific styles import
import hero from './public/herosection1.png'
const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1>Guilt-Free Indulgence</h1>
        <h2>100% Maida-Free. 100% Refined Sugar-Free.</h2>
        <p>Delicious desserts that support a conscious, healthy lifestyle without compromise on flavor.</p>
        <button className="cta-button" onClick={() => window.location.href='#menu'}>Explore Our Menu</button>
      </div>
      {/* Background image or a prominent product image here */}
      <div className="hero-image">
        {/* Placeholder for your main hero image */}
        <img src={hero} alt="Madam Cocoa Products" />
      </div>
    </section>
  );
};

export default HeroSection;