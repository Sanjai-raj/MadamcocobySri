// components/USPSection.js
import React from 'react';
import './USPSection.css';

const USPSection = () => {
  return (
    <section className="usp-section">
      <h2>Why Choose Madam Cocoa?</h2>
      <div className="usp-grid">
        <div className="usp-item">
          <h3>Guilt-Free Goodness</h3>
          <p>100% Maida-Free. 100% Refined Sugar-Free.</p>
        </div>
        <div className="usp-item">
          <h3>Wholesome Ingredients</h3>
          <p>Baked exclusively with nutrient-rich Millets (Ragi, Karuppu Kavuni) and natural Jaggery.</p>
        </div>
        <div className="usp-item">
          <h3>Freshly Handcrafted</h3>
          <p>Every treat is lovingly handcrafted and baked fresh daily in our home kitchen.</p>
        </div>
        <div className="usp-item">
          <h3>Conscious Indulgence</h3>
          <p>Delicious desserts that support a healthy lifestyle without compromising on flavor.</p>
        </div>
      </div>
    </section>
  );
};

export default USPSection;