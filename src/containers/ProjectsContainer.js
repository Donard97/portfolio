import React from 'react';
import Grid from '@mui/material/Grid';
import Navbar from '../components/nav_bar/NavBar';
import Footer from '../components/footer/Footer';
import ProjectCards from '../components/cards/ProjectCards';

function ProjectsContainer() {
  return (
    <>
      <Navbar />
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <ProjectCards />
      </Grid>
      <Footer />
    </>
  );
}

export default ProjectsContainer;
