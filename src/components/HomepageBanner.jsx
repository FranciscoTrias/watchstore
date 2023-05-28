import { Box } from '@mui/material';
import React from 'react';

export const Homepagebanner = () => {
  return (
    <Box>
      <video
        style={{ height: '350px', objectFit: 'cover', width: '100%' }}
        autoPlay
        loop
        muted
      >
        <source src="/assets/video/clock.mp4" type="video/mp4" />
      </video>
    </Box>
  );
};
export default Homepagebanner;
