import { AddShoppingCart } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import React from 'react';

const ProductFrontCard = ({ srcImage, productDescription, productTitle}) => {
  return (
    <Box sx={{ height: '593px', width:'50%', textAlign: 'center', alignItems:'center'  }}>
      <Box>
        <img
          style={{  display: 'initial', height: '390px', objectFit: 'cover', width: '90%' }}
          src={srcImage}
        ></img>
        <blockquote style={{ marginTop: '0.5rem' }}>
          <Typography variant="h4">{productTitle}</Typography>
          <Typography variant="h7">
            {productDescription}
          </Typography>
        </blockquote>
        
        <Button style={{marginTop: '0.5rem'}} variant="outlined" startIcon={<AddShoppingCart />}>
          Shop Now
        </Button>
      </Box>
    </Box>
  );
};

export default ProductFrontCard;
