import { AddShoppingCart } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import React from 'react';

const ProductFrontCard = ({ srcImage, productDescription, productTitle }) => {
  return (
    <Box
      sx={{
        textAlign: 'center',
        alignItems: 'center',
        paddingLeft: '10px',
        paddingRight: '15px',
        paddingBottom: '15px',
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <img
          style={{
            position: 'relative',
            left: '0',
            top: '0',
            width: '650px',
            height: 'auto',
            display: 'initial'
          }}
          // style={{  display: 'initial', height: '450px', objectFit: 'cover', width: '750px' }}
          src={srcImage}
        ></img>
      </Box>
      <blockquote style={{ marginTop: '0.5rem' }}>
        <Typography variant="h4">{productTitle}</Typography>
        <Typography variant="h7">{productDescription}</Typography>
      </blockquote>

      <Button
        
        style={{ marginTop: '0.5rem', color: 'black', borderColor:'black' }}
        variant="outlined"
        
      >
        Shop Now
      </Button>
    </Box>
  );
};

export default ProductFrontCard;
