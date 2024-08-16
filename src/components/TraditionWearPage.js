


import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Card, CardContent, CardActions, Button, Grid, Box } from '@mui/material';
import './TraditionWearPage.css';

const traditionWearDresses = [
  { 
    id: 1, 
    image: 'https://2.bp.blogspot.com/-Qa8y3o18m2g/UqQYziZkQSI/AAAAAAAAEGQ/30rtKwyi7ws/s1600/Best+Traditional+Indian+Bridal+Outfits+2.jpg', 
    name: 'Traditional Wear', 
    price: 'Rs.1500',
    accessories: [
      'https://i.pinimg.com/originals/0d/ed/05/0ded055b98b4b7e8f5623ce338e72e10.jpg',
       'https://i.pinimg.com/originals/17/e1/85/17e18555748fc6b23bb526840c0ed367.png'
    ]
  },
  { 
    id: 2, 
    image: 'http://cartnext.in/wp-content/uploads/2018/06/saree17.jpg', 
    name: 'Traditional Wear', 
    price: 'Rs.2500',
    accessories: [
      'https://i.pinimg.com/originals/14/42/2a/14422a15d06e745b2932d3c1a92620bd.jpg',
      'https://i.pinimg.com/originals/c0/56/7c/c0567c0742b025d7d1f4fe230dbe5ded.jpg'
    ]
  },
  { 
    id: 2, 
    image: 'https://i.pinimg.com/originals/53/b9/c1/53b9c1ef778e4195a19b45d0d8bf40b8.jpg', 
    name: 'Traditional Wear', 
    price: 'Rs.5600',
    accessories: [
      'https://i.etsystatic.com/21861778/r/il/124c83/2797900773/il_1588xN.2797900773_7yfy.jpg',
      'https://img.etsystatic.com/il/b05ed1/1090725807/il_fullxfull.1090725807_kw48.jpg?version=0'
    ]
  },
  { 
    id: 2, 
    image: 'https://i.pinimg.com/originals/24/c6/0c/24c60ca73fd5ce624ae0cf5cafcfd8d8.jpg', 
    name: 'Traditional Wear', 
    price: 'Rs.799',
    accessories: [
      'http://southindiajewels.com/wp/wp-content/uploads/2017/09/traditional-pearl-chain-designs-10.jpg',
      'https://blog.southindiajewels.com/wp-content/uploads/2019/10/Traditional-Earrings-For-Weddings13.jpg'
    ]
  },
  { 
    id: 2, 
    image: 'https://i.pinimg.com/originals/5a/c9/53/5ac953a931e87daddd7f8019b9e53ff8.jpg', 
    name: 'Traditional Wear', 
    price: 'Rs.899',
    accessories: [
      'http://2.bp.blogspot.com/-4QIZq65ZJ3I/T3Q1SUhXU8I/AAAAAAAABFM/EbRztcZQNtM/s1600/traditional-earrings.jpg',
      'https://www.vhv.rs/dpng/d/444-4448997_temple-jewellery-bangles-gold-hd-png-download.png'
    ]
  },
  { 
    id: 2, 
    image: 'https://i.pinimg.com/originals/71/22/b3/7122b31c6a1a836d0c0b7c21798652e2.jpg', 
    name: 'Traditional Wear', 
    price: 'Rs.955',
    accessories: [
      'https://i.pinimg.com/originals/ec/64/07/ec6407340f34578f10022152446aa597.jpg',
      'https://www.caratlane.com/blog/wp-content/uploads/2022/08/IMG_2540-1.jpg'
    ]
  },
  { 
    id: 2, 
    image: 'https://i.pinimg.com/736x/bc/a8/3c/bca83c50512e3a4238439173fae16bee.jpg', 
    name: 'Traditional Wear', 
    price: 'Rs.3200',
    accessories: [
      'http://blog.southindiajewels.com/wp-content/uploads/2019/12/traditional-gold-necklace-designs-1.jpg',
      'https://www.dhanalakshmijewellers.com/wp-content/uploads/2020/03/goldbanglescover.jpg'
    ]
  },
  { 
    id: 2, 
    image: 'https://www.southindiafashion.com/wp-content/uploads/2019/08/evening-gowns-made-from-silk-sarees-2-1.jpg', 
    name: 'Traditional Wear', 
    price: 'Rs.756',
    accessories: [
      'https://blog.southindiajewels.com/wp-content/uploads/2020/08/ethnic-earrings-for-saree-11-1-1024x797.jpg',
      'https://png.pngitem.com/pimgs/s/220-2200814_bracelet-hd-png-download.png'
    ]
  },
  // Add more dresses with accessories as needed
];

const TraditionWearPage = () => {
  const navigate = useNavigate();

  const handleBuyNow = (dress) => {
    navigate(`/traditionwear/${dress.id}`, { state: dress }); // Pass dress details to the state
  };

  return (
    <Container className="traditionwear-page" maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom className="traditionwear-header">
        Tradition Wear Collection
      </Typography>
      <Grid container spacing={4}>
        {traditionWearDresses.map((dress) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={dress.id}>
            <Card className="traditionwear-card">
              <CardContent>
                <Box className="traditionwear-image-container">
                  <img src={dress.image} alt={dress.name} className="traditionwear-image" />
                </Box>
                <Typography variant="h6" component="h2" className="traditionwear-title">
                  {dress.name}
                </Typography>
                <Typography variant="body1" component="p" className="traditionwear-price">
                  {dress.price}
                </Typography>
                <Grid container spacing={1} className="traditionwear-accessories">
                  {dress.accessories.map((accessory, index) => (
                    <Grid item xs={6} key={index}>
                      <img src={accessory} alt={`Accessory ${index + 1}`} className="traditionwear-accessory-image" />
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleBuyNow(dress)}
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

export default TraditionWearPage;
