import React from 'react';

import { Button, Box, Typography, Grid } from '@mui/material';
import Homepagebanner from '@/components/HomepageBanner';
import ProductFrontCard from '@/shared/components/ProductFrontCard';

const Home = () => {
  return (
    <>
      <Grid container spacing={0} sx={{ flexGrow: 2 }}>
        <Grid item xs={12}>
          <Homepagebanner></Homepagebanner>
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

        <Grid item xs={2}>
          <Box bgcolor="cyan">
            box3
            <img src="/assets/images/Product1.jpg"></img>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box bgcolor="green" height={{ sm: '100px' }}>
            box3
          </Box>
        </Grid>
      </Grid>
      <Box display="flex" justifyContent="center" alignContent="center">
        <Typography variant="h2">Welcome to Focus</Typography>
        <h2>Welcome to Focus</h2>
      </Box>
    </>
  );
};
export default Home;
