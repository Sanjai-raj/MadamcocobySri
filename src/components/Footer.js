// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-background-dark text-text-light py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="font-serif text-lg mb-2">&copy; {new Date().getFullYear()} Madam Cocoa by Shrisha. All rights reserved.</p>
        <p className="font-sans text-sm text-text-light/70">Serving the Pollachi community with healthy, delicious treats.</p>

        <div className="mt-6 flex justify-center space-x-6">
          <a href="#home" className="hover:text-primary transition-colors duration-300">Home</a>
          <a href="#menu" className="hover:text-primary transition-colors duration-300">Menu</a>
          <a href="#about" className="hover:text-primary transition-colors duration-300">About</a>
          <a href="#contact" className="hover:text-primary transition-colors duration-300">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;