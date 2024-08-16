// src/components/DressDetail.js
import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import './DressDetail.css';

const DressDetail = () => {
  const location = useLocation();
  const { dress } = location.state || {};
  const { addToCart } = useContext(CartContext);

  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  const handleSizeChange = (event) => setSelectedSize(event.target.value);
  const handleColorChange = (event) => setSelectedColor(event.target.value);

  const handleAddToCart = () => {
    const itemToAdd = { ...dress, selectedSize, selectedColor };
    addToCart(itemToAdd);
    alert('Added to cart!');
  };

  return (
    <div className="dress-detail">
      {dress ? (
        <>
          <div className="dress-image-container">
            <img src={dress.image} alt={dress.name} className="dress-image-detail" />
          </div>
          <div className="dress-info">
            <h1>{dress.name}</h1>
            <p>Price: {dress.price}</p>
            <div className="select-container">
              <div className="size-selection">
                <label htmlFor="size">Size:</label>
                <select id="size" value={selectedSize} onChange={handleSizeChange}>
                  <option value="">Select Size</option>
                  <option value="S">Small</option>
                  <option value="M">Medium</option>
                  <option value="L">Large</option>
                  <option value="XL">Extra Large</option>
                </select>
              </div>
              <div className="color-selection">
                <label htmlFor="color">Color:</label>
                <select id="color" value={selectedColor} onChange={handleColorChange}>
                  <option value="">Select Color</option>
                  <option value="red">Red</option>
                  <option value="blue">Blue</option>
                  <option value="green">Green</option>
                  <option value="black">Black</option>
                </select>
              </div>
            </div>
            <div className="actions">
              <button onClick={handleAddToCart}>Add to Cart</button>
              <button>Buy Now</button>
            </div>
          </div>
        </>
      ) : (
        <p>No dress selected</p>
      )}
    </div>
  );
};

export default DressDetail;
