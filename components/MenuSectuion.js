// components/MenuSection.js
import React, { useState } from 'react';
import './MenuSection.css';

const MenuSection = () => {
  const [filter, setFilter] = useState('all'); // 'all', 'brownies', 'cookies'

  const products = [
    {
      id: 1,
      category: 'brownies',
      name: 'Ragi Choco Brownie',
      description: 'Fudgy, high-fiber, made with Finger Millet (Ragi is rich in Calcium and Iron).',
      image: '/path/to/ragi-brownie.jpg',
      weight: '1/2 KG'
    },
    {
      id: 2,
      category: 'brownies',
      name: 'Karuppu Kavuni Brownie',
      description: 'Our nutrient-dense specialty, made with Black Rice flour, known for its high antioxidants (Anthocyanins).',
      image: '/path/to/karuppu-kavuni-brownie.jpg',
      weight: '1/2 KG'
    },
    {
      id: 3,
      category: 'brownies',
      name: 'Whole Wheat Choco Brownie',
      description: 'Classic chocolate indulgence, made healthier with whole wheat.',
      image: '/path/to/whole-wheat-brownie.jpg',
      weight: '1/2 KG'
    },
    {
        id: 4,
        category: 'brownies',
        name: 'Nutty Choco Brownie',
        description: 'Rich chocolate brownie with a delightful crunch, Ragi base.',
        image: '/path/to/nutty-brownie.jpg',
        weight: '1/2 KG'
    },
    {
      id: 5,
      category: 'cookies',
      name: 'Whole Wheat Choco Chip Monster Cookie',
      description: 'A giant cookie packed with wholesome choco chips, made with whole wheat.',
      image: '/path/to/choco-chip-cookie.jpg',
    },
    {
      id: 6,
      category: 'cookies',
      name: 'Whole Wheat Nutty Cookies',
      description: 'Crunchy and wholesome cookies, loaded with nuts and baked with whole wheat.',
      image: '/path/to/nutty-cookie.jpg',
    },
  ];

  const filteredProducts = products.filter(product =>
    filter === 'all' ? true : product.category === filter
  );

  return (
    <section id="menu" className="menu-section">
      <h2>Our Delicious Menu</h2>
      <div className="filter-buttons">
        <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>All</button>
        <button className={filter === 'brownies' ? 'active' : ''} onClick={() => setFilter('brownies')}>Brownies</button>
        <button className={filter === 'cookies' ? 'active' : ''} onClick={() => setFilter('cookies')}>Cookies</button>
      </div>
      <div className="product-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image || '/path/to/placeholder.jpg'} alt={product.name} />
            <h3>{product.name}</h3>
            {product.weight && <p className="product-weight">{product.weight}</p>}
            <p className="product-description">{product.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuSection;