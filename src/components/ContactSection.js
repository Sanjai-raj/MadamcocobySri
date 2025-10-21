// components/ContactSection.js

import './ContactSection.css';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi'; // ✅ Clean outlined mail icon

const ContactSection = () => {
  const phoneNumber = "+91 86673 53744"; 
  const emailAddress = "madamecocoa@gmail.com"; 
  const instagramLink = "https://www.instagram.com/madam_cocoa_?igsh=MXF4dnZ0dnloYmc0dQ=="; 
  const whatsappLink = `https://wa.me/${phoneNumber.replace(/\D/g, '')}`; 
  const gmailLink = `mailto:${emailAddress}`;

  return (
    <section id="contact" className="contact-section">
      <h2>Get in Touch</h2>
      <p className="contact-intro">
        Ready to indulge? Contact us to place your order or learn more!
      </p>

      <div className="contact-details">
        <div className="contact-item">
          <h3>Primary Contact (Ordering)</h3>

          <p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp size={20} className="icon" /> WhatsApp/Phone: {phoneNumber}
            </a>
          </p>

          <p>
            <a href={gmailLink} target="_blank" rel="noopener noreferrer">
              <HiOutlineMail size={22} className="icon" /> Email: {emailAddress}
            </a>
          </p>
        </div>

        <div className="contact-item">
          <h3>Ordering Note</h3>
          <p>
            Contact us directly via WhatsApp/Phone to check availability and place your order.
            We can't wait to bake for you!
          </p>
        </div>

        <div className="contact-item">
          <h3>Location</h3>
          <p>Pollachi, Tamil Nadu (Home-based/Local service)</p>
        </div>
      </div>

      <div className="social-media">
        <h3>Connect With Us</h3>
        <div className="social-icons">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={30} className="social-icon" />
          </a>
          <a href={instagramLink} target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} className="social-icon" />
          </a>
          <a href={gmailLink} target="_blank" rel="noopener noreferrer">
            <HiOutlineMail size={30} className="social-icon" /> {/* ✅ Matching outline icon */}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
