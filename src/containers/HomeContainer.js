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
          <Typography variant="h1" sx={{ fontSize: '65px', paddingTop: '5px' }}>Donard Golaj</Typography>
          <Typography variant="h2" className="position">Junior full-stack developer</Typography>
        </Box>
        <Box>
          <Typography variant="p" component="div">write the code below and press enter to continue:</Typography>
          <input type="text" placeholder="whois" className="input" />
        </Box>
      </Box>
    </Container>
    <Footer />
  </>
);

export default HomeContainer;
