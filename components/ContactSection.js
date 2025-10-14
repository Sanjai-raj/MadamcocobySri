// components/ContactSection.js
import React from 'react';
import './ContactSection.css';
// You'd typically use actual SVG icons or font-awesome for social media
// import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';

const ContactSection = () => {
  const phoneNumber = "[Your Business Phone Number]"; // Replace with actual number
  const emailAddress = "[Your Business Email Address]"; // Replace with actual email
  const instagramLink = "[Your Instagram Link]"; // Replace with actual link
  const facebookLink = "[Your Facebook Link]"; // Replace with actual link

  return (
    <section id="contact" className="contact-section">
      <h2>Get in Touch</h2>
      <p className="contact-intro">Ready to indulge? Contact us to place your order or learn more!</p>

      <div className="contact-details">
        <div className="contact-item">
          <h3>Primary Contact (Ordering)</h3>
          <p>
            <a href={`tel:${phoneNumber}`}>WhatsApp/Phone: {phoneNumber}</a>
          </p>
          <p>
            <a href={`mailto:${emailAddress}`}>Email: {emailAddress}</a>
          </p>
        </div>

        <div className="contact-item">
          <h3>Ordering Note</h3>
          <p>Contact us directly via WhatsApp/Phone to check availability and place your order. We can't wait to bake for you!</p>
        </div>

        <div className="contact-item">
          <h3>Location</h3>
          <p>Pollachi, Tamil Nadu (Home-based/Local service)</p>
        </div>
      </div>

      <div className="social-media">
        <h3>Connect With Us</h3>
        <div className="social-icons">
          <a href={instagramLink} target="_blank" rel="noopener noreferrer">
            {/* <FaInstagram size={30} /> */}
            <img src="/path/to/instagram-icon.svg" alt="Instagram" className="social-icon" />
          </a>
          <a href={facebookLink} target="_blank" rel="noopener noreferrer">
            {/* <FaFacebook size={30} /> */}
            <img src="/path/to/facebook-icon.svg" alt="Facebook" className="social-icon" />
          </a>
          {/* Add more social icons as needed */}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;