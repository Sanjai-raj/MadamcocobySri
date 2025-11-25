// components/AboutSection.js
import React from 'react';
import about from './public/about.png'

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">About Madam Cocoa</h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-8">
            <div className="bg-background-light p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-accent">
              <h3 className="text-2xl font-serif font-bold text-primary mb-3">Our Mission</h3>
              <p className="text-text-dark/80 font-sans leading-relaxed">
                To provide delicious desserts that support a conscious, healthy lifestyle without compromise on flavor.
              </p>
            </div>

            <div className="bg-background-light p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-secondary">
              <h3 className="text-2xl font-serif font-bold text-primary mb-3">Quality & Craftsmanship</h3>
              <p className="text-text-dark/80 font-sans leading-relaxed">
                Every treat is handcrafted with love and baked fresh daily in our home kitchen. We believe in using only the finest, wholesome ingredients to bring you the best in taste and nutrition.
              </p>
            </div>

            <div className="bg-background-light p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-primary">
              <h3 className="text-2xl font-serif font-bold text-primary mb-3">Local & Proud</h3>
              <p className="text-text-dark/80 font-sans leading-relaxed">
                Proudly serving the Pollachi community with homemade goodness. We're a home-based/local service dedicated to bringing healthy indulgence right to your doorstep.
              </p>
            </div>
          </div>

          <div className="md:w-1/2 relative">
            <div className="absolute inset-0 bg-primary/10 rounded-3xl transform rotate-3 scale-105 -z-10"></div>
            <div className="absolute inset-0 bg-secondary/10 rounded-3xl transform -rotate-3 scale-105 -z-10"></div>
            <img
              src={about}
              alt="Madam Cocoa baking"
              className="rounded-3xl shadow-xl w-full h-auto object-cover transform transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;