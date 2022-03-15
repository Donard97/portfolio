import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Navbar from '../components/nav_bar/NavBar';
import Footer from '../components/footer/Footer';
import '../stylesheet/home.css';

const HomeContainer = () => (
  <>
    <Navbar />
    <Container className="homeContent">
      <Box className="content">
        <Box>
          <Typography variant="p">Hello! I am</Typography>
          <Typography variant="h1" sx={{ fontSize: '60px' }}>Donard Golaj</Typography>
          <Typography variant="h2" sx={{ fontSize: '40px' }}>Junior full-stack developer</Typography>
        </Box>
        <Box>
          <Typography variant="p" component="div">write the code below and press enter to continue:</Typography>
          <Typography variant="p" component="div">whois</Typography>
        </Box>
      </Box>
    </Container>
    <Footer />
  </>
);

export default HomeContainer;
