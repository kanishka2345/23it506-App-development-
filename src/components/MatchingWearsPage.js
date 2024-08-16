import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Card, CardContent, CardActions, Button, Grid, Box } from '@mui/material';
import './MatchingWearsPage.css';

const matchingWears = [
  { id: 1, image: 'https://i5.walmartimages.com/asr/92e47241-f3be-45b8-9119-ce26e8cac2cf_1.93044052ce05d47908cd77c074e7ded9.jpeg', name: 'Matching Wear 1', price: '$69.99' },
  { id: 2, image: 'https://i5.walmartimages.com/asr/50c5b158-2c48-4cad-91eb-260a0ba6522b_1.2be3b94967a143279628abfe08f24d70.jpeg', name: 'Matching Wear 2', price: '$79.99' },
  { id: 3, image: 'https://www.omoda.be/on/demandware.static/-/Sites-omoda-master/default/dw70998e6a/37/P121537/fb_236137_1.jpg', name: 'Matching Wear 3', price: '$89.99' },
  { id: 4, image: 'https://m.media-amazon.com/images/I/610Zv14dnVL._AC_UY1100_.jpg', name: 'Matching Wear 4', price: '$99.99' },
  { id: 4, image: 'https://m.media-amazon.com/images/I/81P2ilcdstL._AC_UY1100_.jpg', name: 'Matching Wear 4', price: '$99.99' },
  { id: 4, image: 'https://images.meesho.com/images/products/56467033/w74nl_512.jpg', name: 'Matching Wear 4', price: '$99.99' },
  { id: 4, image: 'https://imgs7.luluandsky.com/catalog/product/8/9/8907884215709_2.JPG', name: 'Matching Wear 4', price: '$99.99' },
  { id: 4, image: 'https://www.aariworkblouse.com/wp-content/uploads/2020/10/aariwork-blouse-bridal-blouse-design153-1229x1536.jpg', name: 'Matching Wear 4', price: '$99.99' },
  { id: 4, image: 'https://i.pinimg.com/originals/fa/e6/29/fae62992ba3447795bf1676f29e50d2f.jpg', name: 'Matching Wear 4', price: '$99.99' },
  { id: 4, image: 'https://romans-cdn.rlab.net/images/original/3c85e02e-1e2c-4a3a-983c-b4bd791f4222.jpg', name: 'Matching Wear 4', price: '$99.99' },
  { id: 4, image: 'https://romans-cdn.rlab.net/images/original/4240d346-79ef-4a58-88f9-0db916e0d87c.jpg', name: 'Matching Wear 4', price: '$99.99' },
  { id: 4, image: 'https://www.elegantgene.com/wp-content/uploads/2022/10/How-To-Wear-Jeggings-In-The-Summer.jpg', name: 'Matching Wear 4', price: '$99.99' },
  // Add more matching wears as needed
];

const MatchingWearsPage = () => {
  const navigate = useNavigate();

  const handleBuyNow = (wear) => {
    navigate(`/matchingwears/${wear.id}`, { state: wear }); // Pass wear details to the state
  };

  return (
    <Container className="matchingwears-page" maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom className="matchingwears-header">
        Matching Wears Collection
      </Typography>
      <Grid container spacing={4}>
        {matchingWears.map((wear) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={wear.id}>
            <Card className="matchingwears-card">
              <CardContent>
                <Box className="matchingwears-image-container">
                  <img src={wear.image} alt={wear.name} className="matchingwears-image" />
                </Box>
                <Typography variant="h6" component="h2" className="matchingwears-title">
                  {wear.name}
                </Typography>
                <Typography variant="body1" component="p" className="matchingwears-price">
                  {wear.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleBuyNow(wear)}
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

export default MatchingWearsPage;
