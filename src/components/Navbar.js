import React, { useState, useEffect } from 'react';
import logo from "./public/LogoOG.png";
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Madam Cocoa by Shrisha Logo" className="h-12 w-auto object-contain" />
          <a href="#home" className={`font-serif text-xl font-bold ${scrolled ? 'text-primary' : 'text-white'} transition-colors duration-300`}>
            Madam Cocoa
          </a>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className={`text-2xl ${scrolled ? 'text-primary' : 'text-white'} focus:outline-none`}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <ul className={`md:flex space-x-8 items-center hidden`}>
          {['Home', 'Menu', 'About', 'Contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className={`font-sans font-semibold text-lg hover:text-accent transition-colors duration-300 ${scrolled ? 'text-text-dark' : 'text-white'}`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className={`absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg flex flex-col items-center py-6 space-y-4 md:hidden transition-all duration-300 origin-top ${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`}>
          {['Home', 'Menu', 'About', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="font-sans font-semibold text-xl text-text-dark hover:text-primary transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
