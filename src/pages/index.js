import React from 'react';
import { Box, Grid } from '@mui/material';

import Homepagebanner from '@/components/HomepageBanner';
import ProductFrontCard from '@/shared/components/ProductFrontCard';

const Home = () => {
  return (
    <Grid container spacing={0} sx={{ flexGrow: 2 }}>
      <Grid item xs={12}>
        <Homepagebanner />
      </Grid>
      <Grid
        item
        xs={12}
        sx={{ marginTop: '2.5rem', marginLeft: '5rem', marginRight: '5rem' }}
      >
        <Box display="flex" sx={{ height: '593px', width: '100%' }}>
          <ProductFrontCard
            srcImage="/assets/images/Product1.jpg"
            productTitle="Casio G-Shock"
            productDescription="Introducing the Casio G-Shock: A game-changer in sports watches."
          />
          <ProductFrontCard
            srcImage="/assets/images/Product2.jpg"
            productTitle="Casio LTP-1310"
            productDescription="Where sophistication meets precision, elevating your style with every tick."
          />
        </Box>
      </Grid>
    </Grid>
  );
};
export default Home;
