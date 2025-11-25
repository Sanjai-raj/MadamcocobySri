// components/ContactSection.js
import React from 'react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const ContactSection = () => {
  const phoneNumber = "+91 86673 53744";
  const emailAddress = "madamcocoa41@gmail.com";
  const instagramLink = "https://www.instagram.com/madam_cocoa_?igsh=MXF4dnZ0dnloYmc0dQ==";
  const whatsappLink = `https://wa.me/${phoneNumber.replace(/\D/g, '')}`;
  const gmailLink = `mailto:${emailAddress}`;

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Get in Touch</h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-text-dark/70 font-sans max-w-2xl mx-auto">
            Ready to indulge? Contact us to place your order or learn more!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          <div className="bg-background-light p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300 border-t-4 border-primary">
            <h3 className="text-xl font-serif font-bold text-primary mb-4">Ordering</h3>
            <div className="space-y-4">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-text-dark hover:text-accent transition-colors duration-300">
                <FaWhatsapp size={24} />
                <span className="font-sans font-medium">{phoneNumber}</span>
              </a>
              <a href={gmailLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-text-dark hover:text-accent transition-colors duration-300">
                <HiOutlineMail size={24} />
                <span className="font-sans font-medium">{emailAddress}</span>
              </a>
            </div>
          </div>

          <div className="bg-background-light p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300 border-t-4 border-accent">
            <h3 className="text-xl font-serif font-bold text-primary mb-4">Ordering Note</h3>
            <p className="text-text-dark/80 font-sans leading-relaxed">
              Contact us directly via WhatsApp/Phone to check availability and place your order.
              We can't wait to bake for you!
            </p>
          </div>

          <div className="bg-background-light p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300 border-t-4 border-secondary">
            <h3 className="text-xl font-serif font-bold text-primary mb-4">Location</h3>
            <p className="text-text-dark/80 font-sans leading-relaxed">
              Pollachi, Tamil Nadu<br />
              (Home-based/Local service)
            </p>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-serif font-bold text-primary mb-8">Connect With Us</h3>
          <div className="flex justify-center gap-8">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-all duration-300 transform hover:-translate-y-2"
            >
              <FaWhatsapp size={32} />
            </a>
            <a
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 transform hover:-translate-y-2"
            >
              <FaInstagram size={32} />
            </a>
            <a
              href={gmailLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all duration-300 transform hover:-translate-y-2"
            >
              <HiOutlineMail size={32} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
