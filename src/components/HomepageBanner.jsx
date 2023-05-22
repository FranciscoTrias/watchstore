
import { Box, CardMedia, Typography } from '@mui/material'
import React from 'react'
import styled from '@emotion/styled'
import { Height } from '@mui/icons-material'



export const Homepagebanner = () => {
  

  return (
  
    
  



    <Box position="relative" sx={{height: {xs: '220px', sm: '300px', md: '400px', lg: '400px'  }}} >
    <img
      src="https://images.pexels.com/photos/23475/pexels-photo.jpg"
      alt="text"
      fill="true"
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
    />
  </Box>
  
  // <Box  sx={{ height: {sm: '200px'}, width: "100%"}}>
      
  //     <Box sx={{height: {sm: '100%', xs: '100%'}}} object-fit="cover">
  //     <iframe  src='https://player.vimeo.com/video/827778790?auto=format&fit=crop&muted=1&autoplay=1&loop=1&controls=0'></iframe>
  //         {/* <img sx={{height: '100px'}}  src='https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&'></img> */}
      
  //     </Box>
  // </Box>
      
//     <Box
//       sx={{
        
//         height: "400px",
//         width: "100%",
        
//       }}
//     >
      
//   {/* <iframe id="video-player" src="https://player.vimeo.com/video/827778790?h=d50a7eb2dd&muted=1&autoplay=1&loop=1&controls=0"    allow="autoplay" width="1020px" ></iframe> */}


    
//     </Box>
    
  )
}
export default Homepagebanner;