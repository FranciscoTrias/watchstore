import { Box } from '@mui/material';
import React from 'react';
import styles from './HomepageBanner.module.scss';

export const Homepagebanner = () => {
  return (
    <Box>
      <video
        className={styles.video}
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
