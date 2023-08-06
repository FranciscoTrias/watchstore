import { Box, Grid, Typography } from '@mui/material';
import {
  ShoppingCartOutlined,
  AccountCircleOutlined,
} from '@mui/icons-material';
import React from 'react';

const Navbar = () => {
  return (
    <Box width="100%">
      <Grid
        container
        position="fixed"
        justifyContent="space-evenly"
        height="50px"
        paddingLeft="0.25rem"
        paddingRight="0.25rem"
        bgcolor="white"
        sx={{ zIndex: 1 }}
      >
        <Grid item alignSelf="center" width="120px">
          <Box display="flex" justifyContent="center">
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
          <Box>
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
        </Grid>
      </Grid>
    </Box>
  );
};

export default Navbar;
