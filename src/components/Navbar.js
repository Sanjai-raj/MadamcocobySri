// components/Navbar.js
import React, { useState } from 'react';
import './Navbar.css'; // Component-specific styles
import logo from "./public/LogoOG.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        {/* Placeholder for your actual logo image */}
        <img src={logo} alt="Madam Cocoa by Shrisha Logo" className="logo" />
        <a href="#home">Madam Cocoa by Shrisha</a>
      </div>
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
        <li><a href="#menu" onClick={() => setIsOpen(false)}>Menu</a></li>
        <li><a href="#about" onClick={() => setIsOpen(false)}>About Us</a></li>
        <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;