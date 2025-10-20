import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import USPSection from './components/USPSection';
import MenuSection from './components/MenuSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './App.css'; // Global styles

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <USPSection />
      <MenuSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;