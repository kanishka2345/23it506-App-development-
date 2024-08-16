// // src/components/Dress.js
// import React from 'react';

// const Dress = () => {
//   return <h2>Dress Collection</h2>;
// };

// export default Dress;


// src/components/Dress.js
import React, { useState, useEffect } from 'react';
import './Dress.css';

const Dress = () => {
  const [dressImages, setDressImages] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/dresses') // Adjust the URL if necessary
      .then(response => response.json())
      .then(data => setDressImages(data))
      .catch(error => console.error('Error fetching dresses:', error));
  }, []);

  return (
    <div className="dress-container">
      <h1>Our Dress And Accessories Collection</h1>
      <div className="dress-gallery">
        {dressImages.map((image, index) => (
          <div key={index} className="dress-item">
            <img src={image} alt={`Dress ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dress;


