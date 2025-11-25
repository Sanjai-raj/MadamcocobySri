// components/USPSection.js
import React from 'react';
import { FaLeaf, FaHeart, FaHandHoldingHeart, FaSmile } from 'react-icons/fa';

const USPSection = () => {
  const usps = [
    {
      icon: <FaLeaf className="text-4xl text-accent mb-4" />,
      title: 'Guilt-Free Goodness',
      description: '100% Maida-Free. 100% Refined Sugar-Free.',
      color: 'border-accent'
    },
    {
      icon: <FaHeart className="text-4xl text-primary mb-4" />,
      title: 'Wholesome Ingredients',
      description: 'Baked exclusively with nutrient-rich Millets (Ragi, Karuppu Kavuni) and natural Jaggery.',
      color: 'border-primary'
    },
    {
      icon: <FaHandHoldingHeart className="text-4xl text-secondary mb-4" />,
      title: 'Freshly Handcrafted',
      description: 'Every treat is lovingly handcrafted and baked fresh daily in our home kitchen.',
      color: 'border-secondary'
    },
    {
      icon: <FaSmile className="text-4xl text-accent mb-4" />,
      title: 'Conscious Indulgence',
      description: 'Delicious desserts that support a healthy lifestyle without compromising on flavor.',
      color: 'border-accent'
    }
  ];

  return (
    <section className="py-20 bg-background-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Why Choose Madam Cocoa?</h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {usps.map((usp, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 ${usp.color} text-center group`}
            >
              <div className="flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                {usp.icon}
              </div>
              <h3 className="text-xl font-serif font-bold text-text-dark mb-3 group-hover:text-primary transition-colors duration-300">{usp.title}</h3>
              <p className="text-text-dark/70 font-sans leading-relaxed">
                {usp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USPSection;