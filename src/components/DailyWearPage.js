// // import React from 'react';
// // import './DailyWearPage.css';

// // const DailyWearPage = () => {
// //   const dailyWearItems = [
// //     { id: 1, image: 'https://i.pinimg.com/originals/27/0a/af/270aaf4adfb91d7dec1f9ff5696dad3c.jpg', name: 'Casual Dress', price: '$49.99' },
// //     { id: 2, image: 'https://i.pinimg.com/originals/85/70/05/8570057fa2824d2745c30e71668e1a9b.jpg', name: 'Summer Dress', price: '$59.99' },
// //     { id: 2, image: 'https://sareepetticoat.com/wp-content/uploads/2020/11/GoSriKi-Women-Printed-Straight-Multicolour-Kurta-with-Palazzo-1536x2048.jpg', name: 'Summer Dress', price: '$59.99' },
// //     { id: 2, image: 'https://i.pinimg.com/originals/89/d3/3e/89d33ec4e6b4cc4b474b14e7343cdad2.jpg', name: 'Summer Dress', price: '$59.99' },
// //     { id: 2, image: 'https://i.pinimg.com/originals/55/ad/32/55ad32266dc0841e18ad6e0a14d026a2.jpg', name: 'Summer Dress', price: '$59.99' },
// //     { id: 2, image: 'https://i.pinimg.com/originals/27/25/8c/27258ce8945ca52351d3f607d0fd93a0.jpg', name: 'Summer Dress', price: '$59.99' },
// //     { id: 3, image: 'https://4.imimg.com/data4/QY/NN/ANDROID-55253651/product-1000x1000.jpeg', name: 'Summer Dress', price: '$59.99' },
// //     { id: 2, image: 'https://i.pinimg.com/originals/68/6f/cc/686fccd42a7884f792376acfc96b212a.jpg', name: 'Summer Dress', price: '$59.99' },
// //     { id: 2, image: 'https://i.pinimg.com/originals/17/4d/a0/174da01736947bfeec6bc4e8476d108f.jpg', name: 'Summer Dress', price: '$59.99' },
// //     { id: 2, image: 'https://img1.etsystatic.com/050/1/6835294/il_fullxfull.699336619_df72.jpg', name: 'Summer Dress', price: '$59.99' },
// //     { id: 2, image: 'https://images.designtrends.com/wp-content/uploads/2016/11/07174224/Red-Lace-Top.jpg', name: 'Summer Dress', price: '$59.99' },
// //     { id: 2, image: 'https://euimg.eworldtrade.com/uploads/user_products/0/8/product-273966-t-1520103250-o.jpg', name: 'Summer Dress', price: '$59.99' },
// //     { id: 3, image: 'https://i.pinimg.com/736x/79/ef/b5/79efb5b126df69266011f293df2ea90a.jpg', name: 'Summer Dress', price: '$59.99' },
// //     { id: 2, image: 'https://i.pinimg.com/originals/1b/e6/6b/1be66b3ed59ad0bee442ab3d22cf4e50.jpg', name: 'Summer Dress', price: '$59.99' },
// //     { id: 2, image: 'https://i.pinimg.com/736x/dc/da/24/dcda24fa96a0b42d8e44e0fa0af6179f.jpg', name: 'Summer Dress', price: '$59.99' },
// //     { id: 2, image: 'https://i.pinimg.com/originals/22/5f/24/225f2456494b5833c4afada92646065b.jpg', name: 'Summer Dress', price: '$59.99' },
// //     // Add more items as needed
// //   ];

// //   return (
// //     <div className="daily-wear-page">
// //       <h1>Daily Wear Collection</h1>
// //       <div className="daily-wear-grid">
// //         {dailyWearItems.map(item => (
// //           <div key={item.id} className="daily-wear-item">
// //             <img src={item.image} alt={item.name} className="daily-wear-image" />
// //             <h3>{item.name}</h3>
// //             <p>{item.price}</p>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default DailyWearPage;








// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Container, Typography, Card, CardContent, CardActions, Button, Grid, Box } from '@mui/material';
// import './DailyWearPage.css';

// const dailyWearDresses = [
//   { id: 1, image: 'https://i.pinimg.com/originals/27/0a/af/270aaf4adfb91d7dec1f9ff5696dad3c.jpg', name: 'Casual Dress', price: '$49.99' },
//   { id: 2, image: 'https://i.pinimg.com/originals/85/70/05/8570057fa2824d2745c30e71668e1a9b.jpg', name: 'Summer Dress', price: '$59.99' },
//   { id: 3, image: 'https://sareepetticoat.com/wp-content/uploads/2020/11/GoSriKi-Women-Printed-Straight-Multicolour-Kurta-with-Palazzo-1536x2048.jpg', name: 'Summer Dress', price: '$59.99' },
//   { id: 4, image: 'https://i.pinimg.com/originals/89/d3/3e/89d33ec4e6b4cc4b474b14e7343cdad2.jpg', name: 'Summer Dress', price: '$59.99' },
//   { id: 5, image: 'https://i.pinimg.com/originals/55/ad/32/55ad32266dc0841e18ad6e0a14d026a2.jpg', name: 'Summer Dress', price: '$59.99' },
//   { id: 6, image: 'https://i.pinimg.com/originals/27/25/8c/27258ce8945ca52351d3f607d0fd93a0.jpg', name: 'Summer Dress', price: '$59.99' },
//   { id: 7, image: 'https://4.imimg.com/data4/QY/NN/ANDROID-55253651/product-1000x1000.jpeg', name: 'Summer Dress', price: '$59.99' },
//   { id: 8, image: 'https://i.pinimg.com/originals/68/6f/cc/686fccd42a7884f792376acfc96b212a.jpg', name: 'Summer Dress', price: '$59.99' },
//   { id: 9, image: 'https://i.pinimg.com/originals/17/4d/a0/174da01736947bfeec6bc4e8476d108f.jpg', name: 'Summer Dress', price: '$59.99' },
//   { id: 10, image: 'https://img1.etsystatic.com/050/1/6835294/il_fullxfull.699336619_df72.jpg', name: 'Summer Dress', price: '$59.99' },
//   { id: 11, image: 'https://images.designtrends.com/wp-content/uploads/2016/11/07174224/Red-Lace-Top.jpg', name: 'Summer Dress', price: '$59.99' },
//   { id: 12, image: 'https://euimg.eworldtrade.com/uploads/user_products/0/8/product-273966-t-1520103250-o.jpg', name: 'Summer Dress', price: '$59.99' },
//   { id: 13, image: 'https://i.pinimg.com/736x/79/ef/b5/79efb5b126df69266011f293df2ea90a.jpg', name: 'Summer Dress', price: '$59.99' },
//   { id: 14, image: 'https://i.pinimg.com/originals/1b/e6/6b/1be66b3ed59ad0bee442ab3d22cf4e50.jpg', name: 'Summer Dress', price: '$59.99' },
//   { id: 15, image: 'https://i.pinimg.com/736x/dc/da/24/dcda24fa96a0b42d8e44e0fa0af6179f.jpg', name: 'Summer Dress', price: '$59.99' },
//   { id: 15, image: 'https://asinboutique.com/cdn/shop/files/image_511d0d04-227f-4673-b409-4123f35a7808_360x.jpg?v=1711168301', name: 'Summer Dress', price: '$59.99' },
//   // Add more dresses as needed
// ];

// const DailyWearPage = () => {
//   const navigate = useNavigate();

//   const handleBuyNow = (dress) => {
//     navigate(`/dailywear/${dress.id}`, { state: dress }); // Pass dress details to the state
//   };

//   return (
//     <Container className="dailywear-page" maxWidth="lg">
//       <Typography variant="h4" component="h1" gutterBottom className="dailywear-header">
//         Daily Wear Collection
//       </Typography>
//       <Grid container spacing={4}>
//         {dailyWearDresses.map((dress) => (
//           <Grid item xs={12} sm={6} md={4} lg={3} key={dress.id}>
//             <Card className="dailywear-card">
//               <CardContent>
//                 <Box className="dailywear-image-container">
//                   <img src={dress.image} alt={dress.name} className="dailywear-image" />
//                 </Box>
//                 <Typography variant="h6" component="h2" className="dailywear-title">
//                   {dress.name}
//                 </Typography>
//                 <Typography variant="body1" component="p" className="dailywear-price">
//                   {dress.price}
//                 </Typography>
//               </CardContent>
//               <CardActions>
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   onClick={() => handleBuyNow(dress)}
//                 >
//                   Buy Now
//                 </Button>
//               </CardActions>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// export default DailyWearPage;




import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Card, CardContent, CardActions, Button, Grid, Box } from '@mui/material';
import './DailyWearPage.css';

const dailyWearDresses = [
  {
    id: 1,
    image: 'https://i.pinimg.com/originals/27/0a/af/270aaf4adfb91d7dec1f9ff5696dad3c.jpg',
    name: 'Daily Wear',
    price: 'Rs.500',
    accessories: [
      { id: 1, image: 'https://wallpapercave.com/wp/wp4656066.jpg', name: '' },
      { id: 2, image: 'https://wallpapercave.com/wp/wp2487370.jpg', name: '' },
    ],
  },
  {
    id: 2,
    image: 'https://i.pinimg.com/originals/85/70/05/8570057fa2824d2745c30e71668e1a9b.jpg',
    name: 'Daily Wear',
    price: 'Rs.756',
    accessories: [
      { id: 1, image: 'https://i5.walmartimages.com/asr/815f3d48-a955-49d1-9c80-21666418fad1_1.da0c6279ddace1c20731accd02101bb3.jpeg', name: '' },
      { id: 2, image: 'https://san-bro.com/wp-content/uploads/2020/05/Beautiful-Elegant-Silver-Bracelet-Chain-Bracelet-Bangle-For-Women-Lady-Fashion-Jewelry.jpg', name: '' },
    ],
  },
  {
    id: 3,
    image: 'https://sareepetticoat.com/wp-content/uploads/2020/11/GoSriKi-Women-Printed-Straight-Multicolour-Kurta-with-Palazzo-1536x2048.jpg',
    name: 'Daily Wear',
    price: 'Rs.499',
    accessories: [
      { id: 1, image: 'http://assets0.mirraw.com/images/657308/CHBR0008-_Stylish_Gold_Colored_Daily_Wear_Chain_(2)_original.JPG?1426309438', name: '' },
      { id: 2, image: 'https://i.pinimg.com/736x/8a/96/33/8a96332d0d772a9b6366ddaccdfc5e03.jpg', name: '' },
    ],
  },
  {
    id: 4,
    image: 'https://i.pinimg.com/originals/89/d3/3e/89d33ec4e6b4cc4b474b14e7343cdad2.jpg',
    name: 'Daily Wear',
    price: 'Rs.900',
    accessories: [
      { id: 1, image: 'https://wallpaperaccess.com/full/3372717.jpg', name: '' },
      { id: 2, image: 'https://wallpaperaccess.com/full/2463211.jpg', name: '' },
    ],
  },
  {
    id: 5,
    image: 'https://i.pinimg.com/originals/55/ad/32/55ad32266dc0841e18ad6e0a14d026a2.jpg',
    name: 'Daily Wear',
    price: 'Rs.766',
    accessories: [
      { id: 1, image: 'https://i.pinimg.com/originals/6a/bf/b5/6abfb5680ba8f392deab88704d79115c.jpg', name: '' },
      { id: 2, image: 'https://i.pinimg.com/736x/48/ef/7b/48ef7b3a0050cad69ddfddfd44d5536e.jpg', name: '' },
    ],
  },
  {
    id: 6,
    image: 'https://i.pinimg.com/originals/27/25/8c/27258ce8945ca52351d3f607d0fd93a0.jpg',
    name: 'Daily Wear',
    price: 'Rs.1300',
    accessories: [
      { id: 1, image: 'https://wallpapercave.com/wp/wp7486051.jpg', name: '' },
      { id: 2, image: 'https://willieswallets.com/wp-content/uploads/2019/11/Sac-A-Main-Genuine-Leather-Luxury-Handbags-Women-Bags-Designer-Hand-bags-Women-Shoulder-Crossbody-Messenger-7.jpg', name: '' },
    ],
  },
  {
    id: 7,
    image: 'https://4.imimg.com/data4/QY/NN/ANDROID-55253651/product-1000x1000.jpeg',
    name: 'Daily Wear',
    price: 'Rs.1377',
    accessories: [
      { id: 1, image: 'http://image.shutterstock.com/z/stock-photo-jewelry-bracelet-on-a-black-background-with-reflection-66484513.jpg', name: '' },
      { id: 2, image: 'https://images.meesho.com/images/products/135816534/kc8i8_512.webp', name: '' },
    ],
  },
  {
    id: 8,
    image: 'https://i.pinimg.com/originals/68/6f/cc/686fccd42a7884f792376acfc96b212a.jpg',
    name: 'Daily Wear',
    price: 'Rs.900',
    accessories: [
      { id: 1, image: 'https://i.pinimg.com/originals/89/6c/2e/896c2eec2d73453b71bac6d853df110c.jpg', name: '' },
      { id: 2, image: 'https://cdn.shopify.com/s/files/1/2649/1130/collections/cbddd6a9d131b5d4817d8c4e1ea492f8.jpg?v=1616308216', name: '' },
    ],
  },
  {
    id: 9,
    image: 'https://i.pinimg.com/originals/17/4d/a0/174da01736947bfeec6bc4e8476d108f.jpg',
    name: 'Daily Wear',
    price: 'Rs.499',
    accessories: [
      { id: 1, image: 'https://i.pinimg.com/originals/c6/84/b6/c684b604b179f8f9c89c03404a8cc1a9.jpg', name: '' },
      { id: 2, image: 'https://www.dhanalakshmijewellers.com/wp-content/uploads/2020/03/GoldBangle18-1.jpg', name: '' },
    ],
  },
  {
    id: 10,
    image: 'https://img1.etsystatic.com/050/1/6835294/il_fullxfull.699336619_df72.jpg',
    name: 'Daily Wear',
    price: 'Rs.699',
    accessories: [
      { id: 1, image: 'https://cdn.wallpapersafari.com/75/21/VvMTtj.jpg', name: '' },
      { id: 2, image: 'https://coolwallpapers.me/picsup/5776360-bracelet-wallpapers.jpg', name: '' },
    ],
  },
  // Add more dresses with accessories as needed
];

// const DailyWearPage = () => {
//   const navigate = useNavigate();

//   const handleBuyNow = (dress) => {
//     navigate(`/dailywear/${dress.id}`, { state: dress }); // Pass dress details to the state
//   };

//   return (
//     <Container className="dailywear-page" maxWidth="lg">
//       <Typography variant="h4" component="h1" gutterBottom className="dailywear-header">
//         Daily Wear Collection
//       </Typography>
//       <Grid container spacing={4}>
//         {dailyWearDresses.map((dress) => (
//           <Grid item xs={12} sm={6} md={4} lg={3} key={dress.id}>
//             <Card className="dailywear-card">
//               <CardContent>
//                 <Box className="dailywear-image-container">
//                   <img src={dress.image} alt={dress.name} className="dailywear-image" />
//                 </Box>
//                 <Typography variant="h6" component="h2" className="dailywear-title">
//                   {dress.name}
//                 </Typography>
//                 <Typography variant="body1" component="p" className="dailywear-price">
//                   {dress.price}
//                 </Typography>
//                 {/* Render Accessories */}
//                 <Box className="accessories-container">
//                   <Typography variant="body2" component="p" className="accessories-title">
//                     Accessories:
//                   </Typography>
//                   <Grid container spacing={2}>
//                     {dress.accessories.map((accessory) => (
//                       <Grid item xs={6} key={accessory.id}>
//                         <Box className="accessory-image-container">
//                           <img
//                             src={accessory.image}
//                             alt={accessory.name}
//                             className="accessory-image"
//                           />
//                           <Typography variant="caption" component="p" className="accessory-name">
//                             {accessory.name}
//                           </Typography>
//                         </Box>
//                       </Grid>
//                     ))}
//                   </Grid>
//                 </Box>
//               </CardContent>
//               <CardActions>
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   onClick={() => handleBuyNow(dress)}
//                 >
//                   Buy Now
//                 </Button>
//               </CardActions>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// export default DailyWearPage;





const DailyWearPage = () => {
  const navigate = useNavigate();

  const handleBuyNow = (dress) => {
    navigate(`/dailywear/${dress.id}`, { state: dress }); // Pass dress details to the state
  };

  return (
    <Container className="dailywear-page" maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom className="dailywear-header">
        Daily Wear Collection
      </Typography>
      <Grid container spacing={4}>
        {dailyWearDresses.map((dress) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={dress.id}>
            <Card className="dailywear-card">
              <CardContent>
                <Box className="dailywear-image-container">
                  <img src={dress.image} alt={dress.name} className="dailywear-image" />
                </Box>
                <Typography variant="h6" component="h2" className="dailywear-title">
                  {dress.name}
                </Typography>
                <Typography variant="body1" component="p" className="dailywear-price">
                  {dress.price}
                </Typography>
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

export default DailyWearPage;