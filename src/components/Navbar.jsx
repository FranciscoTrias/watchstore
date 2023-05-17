import { Box, Grid, Typography } from '@mui/material';
import {
  ShoppingCartOutlined,
  AccountCircleOutlined,
} from '@mui/icons-material';
import React from 'react';

const Navbar = () => {
  return (
    <Box width="100%" paddingBottom="1rem">
      <Grid
        container
        justifyContent="space-evenly"
        bgcolor="primary.main"
        paddingTop="0.5rem"
        paddingBottom="0.5rem"
        paddingLeft="0.25rem"
        paddingRight="0.25rem"
        color="primary.contrastText"
      >
        <Grid item alignSelf="center">
          <Box display="flex">
            <a href="#">
              <Typography paddingRight="0.5rem" cursor="pointer" variant="h6">
                Shop
              </Typography>
            </a>
            <a href="#">
              <Typography variant="h6">About</Typography>
            </a>
          </Box>
        </Grid>
        <Grid item alignSelf="center">
          <a href="/">
            <Typography variant="h4"> Logo </Typography>
          </a>
        </Grid>
        <Grid item alignSelf="center">
          <Box display="flex">
            <a href="#">
              <AccountCircleOutlined transform="scale(1.2)" />
            </a>
            <a href="#">
              <ShoppingCartOutlined transform="scale(1.2)" sx={{ marginLeft: '0.5rem' }} />
            </a>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Navbar;
