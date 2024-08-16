// src/components/AccessoriesDetail.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import './AccessoriesDetail.css';

const accessoriesData = {
  1: [
    { id: 101, name: 'Pearl Necklace', price: 'Rs.500', image: 'https://i.pinimg.com/736x/ae/df/93/aedf9365fe5c956769a0ac8ba1636ecb.jpg' },
    { id: 102, name: 'Elegant Bracelet', price: 'Rs.899', image: 'https://www.winpearl.com/assets/images/PearlNecklaces/nky9.jpg' },
  ],
  2: [
    { id: 103, name: 'Gold Ring', price: 'Rs.650', image: 'https://i.pinimg.com/originals/c8/dc/e2/c8dce2834016e3b52ee3c79188718281.jpg' },
    { id: 104, name: 'Diamond Necklace', price: 'Rs.2200', image: 'https://i.pinimg.com/originals/d9/74/b9/d974b93b2eef3536464afb37a7be6ddd.jpg' },
  ],
  // Add more accessory data based on dress ID
};

const AccessoriesDetail = () => {
  const { state } = useLocation();
  const { dress } = state;

  const accessories = accessoriesData[dress.id] || [];

  return (
    <div className="accessories-detail">
      <h1>Accessories for {dress.name}</h1>
      <div className="dress-image">
        <img src={dress.image} alt={dress.name} />
      </div>
      <div className="accessories-list">
        {accessories.map(accessory => (
          <div key={accessory.id} className="accessory-item">
            <img src={accessory.image} alt={accessory.name} />
            <h3>{accessory.name}</h3>
            <p>{accessory.price}</p>
            {/* Add more accessory details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccessoriesDetail;
