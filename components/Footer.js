// components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Madam Cocoa by Shrisha. All rights reserved.</p>
        <p>Serving the Pollachi community with healthy, delicious treats.</p>
        {/* Optional: Quick links */}
        {/* <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#about">About</a></li>
        </ul> */}
      </div>
    </footer>
  );
};

export default Footer;