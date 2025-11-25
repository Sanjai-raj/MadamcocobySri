// components/MenuSection.js
import React, { useState } from 'react';
import menu0 from './public/MenuSection.png'
import natty from './public/WholeNatty.jpg'
import Whole from './public/WholeW.png'
import menu1 from './public/menu1.png'
import menu2 from './public/ChocoB.jpg'
import menu3 from './public/nattyb.webp'

const MenuSection = () => {
  const [filter, setFilter] = useState('all'); // 'all', 'brownies', 'cookies'

  const products = [
    {
      id: 1,
      category: 'brownies',
      name: 'Ragi Choco Brownie',
      description: 'Fudgy, high-fiber, made with Finger Millet (Ragi is rich in Calcium and Iron).',
      image: menu0,
      weight: '1/2 KG'
    },
    {
      id: 2,
      category: 'brownies',
      name: 'Karuppu Kavuni Brownie',
      description: 'Our nutrient-dense specialty, made with Black Rice flour, known for its high antioxidants (Anthocyanins).',
      image: menu1,
      weight: '1/2 KG'
    },
    {
      id: 3,
      category: 'brownies',
      name: 'Whole Wheat Choco Brownie',
      description: 'Classic chocolate indulgence, made healthier with whole wheat.',
      image: menu2,
      weight: '1/2 KG'
    },
    {
      id: 4,
      category: 'brownies',
      name: 'Nutty Choco Brownie',
      description: 'Rich chocolate brownie with a delightful crunch, Ragi base.',
      image: menu3,
      weight: '1/2 KG'
    },
    {
      id: 5,
      category: 'cookies',
      name: 'Whole Wheat Choco Chip Monster Cookie',
      description: 'A giant cookie packed with wholesome choco chips, made with whole wheat.',
      image: Whole,
    },
    {
      id: 6,
      category: 'cookies',
      name: 'Whole Wheat Nutty Cookies',
      description: 'Crunchy and wholesome cookies, loaded with nuts and baked with whole wheat.',
      image: natty,
    },
  ];

  const filteredProducts = products.filter(product =>
    filter === 'all' ? true : product.category === filter
  );

  return (
    <section id="menu" className="py-20 bg-background-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Our Delicious Menu</h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {['all', 'brownies', 'cookies'].map((category) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-full font-sans font-semibold transition-all duration-300 capitalize ${filter === category
                  ? 'bg-primary text-white shadow-lg transform scale-105'
                  : 'bg-white text-primary border border-primary hover:bg-primary/10'
                }`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image || '/path/to/placeholder.jpg'}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300"></div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-serif font-bold text-text-dark group-hover:text-primary transition-colors duration-300">{product.name}</h3>
                  {product.weight && <span className="text-sm font-sans font-medium text-accent bg-accent/10 px-2 py-1 rounded-md whitespace-nowrap">{product.weight}</span>}
                </div>
                <p className="text-text-dark/70 font-sans leading-relaxed">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;