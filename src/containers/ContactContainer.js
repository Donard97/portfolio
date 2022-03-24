import React from 'react';
import Navbar from '../components/nav_bar/NavBar';
import Footer from '../components/footer/Footer';
import ContactForm from '../components/form/ContactForm';

function ContactContainer() {
  return (
    <>
      <Navbar />
      <ContactForm />
      <Footer />
    </>
  );
}

export default ContactContainer;
