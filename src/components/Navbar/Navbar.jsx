import { Box, Grid, Typography } from '@mui/material';
import {
  ShoppingCartOutlined,
  AccountCircleOutlined,
} from '@mui/icons-material';
import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <Box className={styles.navMenu}>
      <Grid
        container
        justifyContent="space-evenly"
        height="50px"
        paddingLeft="0.25rem"
        paddingRight="0.25rem"
        bgcolor="white"
        
        sx={{ zIndex: 1 }}
      >
        <Grid item alignSelf="center" width="120px">
          <Box className={styles.companyButtons}>
            <a href="#">
              <Typography cursor="pointer" variant="h6">
                Shop
              </Typography>
            </a>
            <a href="#">
              <Typography marginLeft="0.5rem" variant="h6">
                About
              </Typography>
            </a>
          </Box>
        </Grid>
        <Grid item alignSelf="center" textAlign="center" width="120px">
          <a href="/">
            <img src="/assets/images/deltri-logo.png"></img>
          </a>
        </Grid>
        <Grid item alignSelf="center" textAlign="center" width="120px">
          <Box className={styles.userButtons}>
            <a href="#">
              <AccountCircleOutlined transform="scale(1.2)" />
            </a>
            <a href="#">
              <ShoppingCartOutlined
                transform="scale(1.2)"
                sx={{ marginLeft: '0.5rem' }}
              />
            </a>
          </Box>
          <div class={styles.hamburger}>
            <span class={styles.bar}></span>
            <span class={styles.bar}></span>
            <span class={styles.bar}></span>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Navbar;
