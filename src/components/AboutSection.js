// components/AboutSection.js
import React from 'react';
import './AboutSection.css';
import about from './public/about.png'

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <h2>About Madam Cocoa by Shrisha</h2>
      <div className="about-content">
        <div className="about-text">
          <h3>Our Mission</h3>
          <p>To provide delicious desserts that support a conscious, healthy lifestyle without compromise on flavor.</p>

          <h3>Quality & Craftsmanship</h3>
          <p>Every treat is handcrafted with love and baked fresh daily in our home kitchen. We believe in using only the finest, wholesome ingredients to bring you the best in taste and nutrition.</p>

          <h3>Local & Proud</h3>
          <p>Proudly serving the Pollachi community with homemade goodness. We're a home-based/local service dedicated to bringing healthy indulgence right to your doorstep.</p>
        </div>
        <div className="about-image">
          {/* Placeholder for an image of Shrisha or the kitchen */}
          <img src={about} alt="Madam Cocoa baking" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;