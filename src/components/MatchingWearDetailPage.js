import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Typography, Card, CardContent, CardActions, Button, FormControl, InputLabel, Select, MenuItem, TextField, Box, Rating } from '@mui/material';
import './MatchingWearDetailPage.css';

const MatchingWearDetailPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const wear = location.state || {}; // Get wear details from location state

  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('');
  const [rating, setRating] = useState(0);
  const [showPayment, setShowPayment] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleBuyNow = () => {
    setShowPayment(true);
  };

  const handlePaymentSubmit = () => {
    // Handle payment submission logic
    alert('Order submitted!');
    navigate('/cart'); // Redirect to cart after submission
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom>
        {wear.name}
      </Typography>
      <Card>
        <CardContent>
          <Box className="wear-image-container">
            <img src={wear.image} alt={wear.name} className="wear-image" />
          </Box>
          <Typography variant="h6" component="h2">
            {wear.name}
          </Typography>
          <Typography variant="body1" component="p">
            {wear.price}
          </Typography>
          <FormControl fullWidth margin="normal">
            <InputLabel>Size</InputLabel>
            <Select
              value={size}
              onChange={(e) => setSize(e.target.value)}
            >
              <MenuItem value="S">S</MenuItem>
              <MenuItem value="M">M</MenuItem>
              <MenuItem value="L">L</MenuItem>
              <MenuItem value="XL">XL</MenuItem>
              <MenuItem value="XXL">XXL</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <TextField
              type="number"
              label="Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <Rating
              value={rating}
              onChange={(e, newValue) => setRating(newValue)}
              precision={0.5}
            />
          </FormControl>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            onClick={handleBuyNow}
          >
            Buy Now
          </Button>
        </CardActions>
      </Card>

      {showPayment && (
        <Box className="payment-form">
          <Typography variant="h6" component="h2" gutterBottom>
            Payment Information
          </Typography>
          <FormControl fullWidth margin="normal">
            <InputLabel>Payment Method</InputLabel>
            <Select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <MenuItem value="gapay">GPay</MenuItem>
              <MenuItem value="phonepay">PhonePe</MenuItem>
              <MenuItem value="cod">Cash on Delivery</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            color="primary"
            onClick={handlePaymentSubmit}
          >
            Submit Order
          </Button>
        </Box>
      )}
    </Container>
  );
};

export default MatchingWearDetailPage;
