import React from 'react'
import {Box, Stack, Typography, Button } from '@mui/material';
import banner from '../assets/images/banner.jpg'
const HeroBanner = () => {
  return (
    <Box sx={{
        mt: {lg: '212px', xs: '70px'},
        m1: {sm: '50px'}
    }} position='relative' p='20px'>
        <Typography color='#FF2625' fontWeight='600' fontSize='26px'>
            Fitness Club
        </Typography>
        <Typography fontWeight={700}
        sx={{ fontSize: { lg: '44px', xs: '40px'
        }}}
        mb='23px' mt='30px'
        
        >
            Sweat, smile <br /> and Repeat
        </Typography>
        <Typography fontSize='22px'
        LineHeight= '35px' mb='20px' >
            Check out the most effective exercises
        </Typography>
        <Button variant="outlined" color="error" href='#exercises'
        sx={{ backgroundColor: '#ff2625',
        padding: '10px'
        
        }}
        >Explore Exercises</Button>
        <Typography fontStyle={600}
        color="#ff2625"
        sx={{
            opacity: 0.1,
            display: {lg: 'block', xs: 'none'}

        }}
        fontSize='200px'

        
        >
            Exercises
        </Typography>
        <img src={banner} alt='ban'
        className='hero-banner-img'
        
         />
    </Box>
  )
}

export default HeroBanner