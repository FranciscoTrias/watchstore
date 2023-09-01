import React from 'react';
import { Box, Grid } from '@mui/material';

import styles from './index.module.scss';
import Homepagebanner from '@/components/homepagebanner/HomepageBanner';
import ProductFrontCard from '@/shared/components/ProductFrontCard';


const Home = () => {
  return (
      <Grid container spacing={0} className={styles.grid_container}>
        <Grid item xs={12}>
          <Homepagebanner />
        </Grid>

        <Grid
          item
          xs={12}
          className={styles.grid_item_body}
        >
          <Box
            flexDirection={{ sm: 'column', xs: 'column', md: 'row' }}
            className={styles.product_container}
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
  );
};
export default Home;
