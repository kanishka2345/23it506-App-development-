// // src/components/Shop.js
// import React from 'react';

// const Shop = () => {
//   return (
//     <div>
//       <h1>Welcome to the Shop</h1>
//       <p>Here you can browse and purchase women's dresses and accessories.</p>
//       <p1>Welcome to our shop</p1>
//       {/* Add more content or components for the shop page */}
//     </div>
//   );
// };

// export default Shop;


// src/components/Shop.js
import React from 'react';

const Shop = () => {
  return (
    <div className="shop-container">
      <h1>Welcome to the Shop</h1>
      <p>Here you can browse and purchase women's dresses and accessories.</p>
      <p className="welcome-message">Welcome to our shop</p>
      {/* Add more content or components for the shop page */}
      <div className="product-section">
        {/* Example content for products */}
        <h2>Our Collection</h2>
        <p>Explore our wide range of dresses and accessories.</p>
        {/* You can include more details, images, or components here */}
      </div>
    </div>
  );
};

export default Shop;


