import React from 'react';
import {  Box, Grid } from '@mui/material';

import Homepagebanner from '@/components/HomepageBanner';
import ProductFrontCard from '@/shared/components/ProductFrontCard';

const Home = () => {
  return (
    <>
      <Grid container spacing={0} sx={{ flexGrow: 2 }}>
        <Grid item xs={12}>
          <Homepagebanner />
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            marginTop: '2.5rem',
            marginBottom: '2.5rem',
          }}
        >
          <Box
            display="flex"
            flexDirection={{ sm: 'column', xs: 'column', md: 'row' }}
            sx={{ justifyContent: 'center', width: '100%' }}
          >
            <ProductFrontCard
              srcImage="/assets/images/Product3.jpg"
              productTitle="Smart Casio 300XLM"
              productDescription="Introducing the Casio 300XLM: A game-changer in smart watches."
            />

            <ProductFrontCard
              srcImage="/assets/images/Product2.jpg"
              productTitle="Casio LTP-1310"
              productDescription="Where sophistication meets precision, elevating your style with every tick."
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
export default Home;
