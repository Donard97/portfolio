import React from 'react';
import Navbar from '../components/nav_bar/NavBar';
import Footer from '../components/footer/Footer';
import Skills from '../components/skills/Skills';
import About from '../components/about/About';

function AboutContainer() {
  return (
    <>
      <Navbar />
      <Skills />
      <About />
      <Footer />
    </>
  );
}

export default AboutContainer;
