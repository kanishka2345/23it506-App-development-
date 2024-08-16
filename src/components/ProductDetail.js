// ProductDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  
  // Fetch product details using the id or get it from context/state
  
  return (
    <div>
      <h1>Product Details for ID: {id}</h1>
      {/* Display product details here */}
    </div>
  );
};

export default ProductDetail;
