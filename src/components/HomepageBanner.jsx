import { Box } from '@mui/material';
import React from 'react';

export const Homepagebanner = () => {
  return (
    <Box>
      <video
        style={{
          marginTop: '3.3rem',
          height: '580px',
          objectFit: 'cover',
          width: '100%',
        }}
        autoPlay
        loop
        muted
      >
        <source src="/assets/video/videobackground.mp4" type="video/mp4" />
      </video>
    </Box>
  );
};
export default Homepagebanner;
