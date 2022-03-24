import React from 'react';
import Navbar from '../components/nav_bar/NavBar';
import Footer from '../components/footer/Footer';
import ProjectCards from '../components/cards/ProjectCards';

function ProjectsContainer() {
  return (
    <>
      <Navbar />
      <ProjectCards />
      <Footer />
    </>
  );
}

export default ProjectsContainer;
