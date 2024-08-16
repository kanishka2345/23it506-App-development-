
// // src/components/AccessoriesPage.js
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './AccessoriesPage.css'; // Import CSS for AccessoriesPage

// const accessories = [
//   { id: 1, name: 'Stone Ring', price: 'Rs.250', image: 'https://getwallpapers.com/wallpaper/full/5/8/3/1173168-wedding-ring-wallpaper-1920x1080-for-ipad-2.jpg' },
//   { id: 2, name: 'Black Pearl', price: 'Rs.499', image: 'https://www.winpearl.com/assets/images/PearlNecklaces/nky9.jpg' },
//   { id: 2, name: 'Stylish Bracelet', price: 'Rs.500', image: 'https://i.pinimg.com/originals/2e/66/09/2e6609507d3860f6a4da3c7a6f66c6c9.jpg' },
//   { id: 2, name: 'Elegant Bracelet', price: 'Rs.333', image: 'http://1.bp.blogspot.com/-1FypBbXsOb0/UYFMdsFrtVI/AAAAAAAAAWg/miuqWo9HjL0/s1600/aDSC00466.jpg' },
//   { id: 2, name: 'Chain', price: 'Rs.765', image: 'https://cdn0.weddingwire.in/articles/images/3/0/5/1/img_61503/neck-chain-design-caratlane-ring.jpg' },
//   { id: 2, name: 'Golden Elegant watch', price: 'Rs.744', image: 'https://bigxmarket.com/wp-content/uploads/2018/05/Luxury-AESOP-Fashion-Ladies-Watch-Rose-Gold-Women-Watches-Elegant-Minimalism-Casual-Black-Female-Waterproof-Clock-1-768x768.jpg' },
//   { id: 2, name: ' Stone Earring', price: 'Rs.400', image: 'https://keepmestylish.com/wp/wp-content/uploads/2017/08/latest-diamond-earrings-designs-11.jpg' },
//   { id: 2, name: 'Gold Jumka', price: 'Rs.456', image: 'https://1.bp.blogspot.com/-eH3-HG8HUrw/UjgaSL2TJII/AAAAAAAAATU/MJhAnzKWdHg/s1600/Gold+Jhumka+Women+Earrings.jpg' },
//   { id: 2, name: 'Stud', price: 'Rs.998', image: 'https://i.pinimg.com/originals/19/fe/08/19fe08ce7097953e9165541cd1b526df.jpg' },
//   { id: 2, name: 'Stud', price: 'Rs.899', image: 'http://www.pngmart.com/files/6/Earring-PNG-Photos.png' },
//   { id: 2, name: 'Saree Pin', price: 'Rs.400', image: 'https://i.ytimg.com/vi/ah9sUm4Mamk/maxresdefault.jpg' },
//   { id: 2, name: 'Ring', price: 'Rs.345', image: 'https://wallpapercrafter.com/desktop/250955-marriage-couple-ring-and-engagement-ring-hd.jpg' },
//   { id: 2, name: 'Ring', price: 'Rs.599', image: 'https://wallpaperaccess.com/full/2463202.jpg' },
//   { id: 2, name: 'Sling Bag', price: 'Rs.700', image: 'https://i.pinimg.com/originals/49/1b/b1/491bb111538a47546bd3c4b5becebe1e.jpg' },
//   { id: 2, name: 'Watch', price: 'Rs.900', image: 'https://www.stylesgap.com/wp-content/uploads/2013/08/Beautiful-Stylish-Ladies-Watches-Stylesgap-43.jpg' },
//   { id: 2, name: 'Pearl Chain', price: 'Rs.743', image: 'https://shop.southindiajewels.com/wp-content/uploads/2023/12/1286_1-scaled.jpg' },
//   { id: 2, name: ' Stylish Bag', price: 'Rs.899', image: 'https://i.tribune.com.pk/media/images/SLing-bag1635181241-4/SLing-bag1635181241-4.jpg' },
//   { id: 2, name: 'Butterfly Earring', price: 'Rs.200', image: 'https://cdn.shopify.com/s/files/1/2060/1697/products/GE187-10.jpg?v=1571610061' },
//   // Add more accessories as needed
// ];

// const AccessoriesPage = () => {
//   const navigate = useNavigate();

//   const handleBuyNow = (accessory) => {
//     navigate(`/accessory/${accessory.id}`, { state: { ...accessory } });
//   };

//   return (
//     <div className="accessories-page">
//       <h1>Accessories Collection</h1>
//       <div className="accessories-collection">
//         {accessories.map((accessory) => (
//           <div key={accessory.id} className="accessory-item">
//             <img src={accessory.image} alt={accessory.name} className="accessory-image" />
//             <h3>{accessory.name}</h3>
//             <p>{accessory.price}</p>
//             <button className="acbuynow" onClick={() => handleBuyNow(accessory)}>Buy Now</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AccessoriesPage;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Card, CardContent, CardActions, Button, Grid, Box } from '@mui/material';
import './AccessoriesPage.css';

const accessories = [
  { id: 1, name: 'Stone Ring', price: 'Rs.250', image: 'https://getwallpapers.com/wallpaper/full/5/8/3/1173168-wedding-ring-wallpaper-1920x1080-for-ipad-2.jpg' },
  { id: 2, name: 'Black Pearl', price: 'Rs.499', image: 'https://www.winpearl.com/assets/images/PearlNecklaces/nky9.jpg' },
  { id: 3, name: 'Stylish Bracelet', price: 'Rs.500', image: 'https://i.pinimg.com/originals/2e/66/09/2e6609507d3860f6a4da3c7a6f66c6c9.jpg' },
  { id: 4, name: 'Elegant Bracelet', price: 'Rs.333', image: 'http://1.bp.blogspot.com/-1FypBbXsOb0/UYFMdsFrtVI/AAAAAAAAAWg/miuqWo9HjL0/s1600/aDSC00466.jpg' },
  { id: 5, name: 'Chain', price: 'Rs.765', image: 'https://cdn0.weddingwire.in/articles/images/3/0/5/1/img_61503/neck-chain-design-caratlane-ring.jpg' },
  { id: 2, name: 'Golden Elegant watch', price: 'Rs.744', image: 'https://bigxmarket.com/wp-content/uploads/2018/05/Luxury-AESOP-Fashion-Ladies-Watch-Rose-Gold-Women-Watches-Elegant-Minimalism-Casual-Black-Female-Waterproof-Clock-1-768x768.jpg' },
   { id: 2, name: ' Stone Earring', price: 'Rs.400', image: 'https://keepmestylish.com/wp/wp-content/uploads/2017/08/latest-diamond-earrings-designs-11.jpg' },
   { id: 2, name: 'Gold Jumka', price: 'Rs.456', image: 'https://1.bp.blogspot.com/-eH3-HG8HUrw/UjgaSL2TJII/AAAAAAAAATU/MJhAnzKWdHg/s1600/Gold+Jhumka+Women+Earrings.jpg' },
   { id: 2, name: 'Stud', price: 'Rs.998', image: 'https://i.pinimg.com/originals/19/fe/08/19fe08ce7097953e9165541cd1b526df.jpg' },
   { id: 2, name: 'Stud', price: 'Rs.899', image: 'http://www.pngmart.com/files/6/Earring-PNG-Photos.png' },
   { id: 2, name: 'Saree Pin', price: 'Rs.400', image: 'https://i.ytimg.com/vi/ah9sUm4Mamk/maxresdefault.jpg' },
   { id: 2, name: 'Ring', price: 'Rs.345', image: 'https://wallpapercrafter.com/desktop/250955-marriage-couple-ring-and-engagement-ring-hd.jpg' },
   { id: 2, name: 'Ring', price: 'Rs.599', image: 'https://wallpaperaccess.com/full/2463202.jpg' },
   { id: 2, name: 'Sling Bag', price: 'Rs.700', image: 'https://i.pinimg.com/originals/49/1b/b1/491bb111538a47546bd3c4b5becebe1e.jpg' },
   { id: 2, name: 'Watch', price: 'Rs.900', image: 'https://www.stylesgap.com/wp-content/uploads/2013/08/Beautiful-Stylish-Ladies-Watches-Stylesgap-43.jpg' },
   { id: 2, name: 'Pearl Chain', price: 'Rs.743', image: 'https://shop.southindiajewels.com/wp-content/uploads/2023/12/1286_1-scaled.jpg' },
   { id: 2, name: ' Stylish Bag', price: 'Rs.899', image: 'https://i.tribune.com.pk/media/images/SLing-bag1635181241-4/SLing-bag1635181241-4.jpg' },
   { id: 2, name: 'Butterfly Earring', price: 'Rs.200', image: 'https://cdn.shopify.com/s/files/1/2060/1697/products/GE187-10.jpg?v=1571610061' },
   { id: 2, name: 'bracelet', price: 'Rs.350', image: 'https://thumbs.dreamstime.com/b/silver-jewels-precious-stones-colorful-wooden-background-58429800.jpg' },
   { id: 2, name: 'chain set', price: 'Rs.500', image: 'https://wallpaperaccess.com/full/3909728.jpg' },
  // Add more accessories as needed
];

const AccessoriesPage = () => {
  const navigate = useNavigate();

  const handleBuyNow = (accessory) => {
    navigate(`/accessory/${accessory.id}`, { state: accessory }); // Pass accessory details to the state
  };

  return (
    <Container className="accessories-page" maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom className="accessories-header">
        Accessories Collection
      </Typography>
      <Grid container spacing={4}>
        {accessories.map((accessory) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={accessory.id}>
            <Card className="accessory-card">
              <CardContent>
                <Box className="accessory-image-container">
                  <img src={accessory.image} alt={accessory.name} className="accessory-image" />
                </Box>
                <Typography variant="h6" component="h2" className="accessory-title">
                  {accessory.name}
                </Typography>
                <Typography variant="body1" component="p" className="accessory-price">
                  {accessory.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleBuyNow(accessory)}
                >
                  Buy Now
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AccessoriesPage;
