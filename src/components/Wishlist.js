// src/components/Wishlist.js
import React from 'react';
import { useWishlist } from '../context/Wishlistcontext';
import './Wishlist.css';

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist();

  if (wishlistItems.length === 0) {
    return (
      <div className="wishlist-page">
        <h1>Your Wishlist</h1>
        <p>No items in your wishlist.</p>
      </div>
    );
  }

  return (
    <div className="wishlist-page">
      <h1>Your Wishlist</h1>
      <div className="wishlist-items">
        {wishlistItems.map((item, index) => (
          <div key={index} className="wishlist-item">
            <img src={item.image} alt={item.name} />
            <div className="wishlist-details">
              <h2>{item.name}</h2>
              <p>Price: ₹{item.price}</p>
              <button onClick={() => removeFromWishlist(item)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
