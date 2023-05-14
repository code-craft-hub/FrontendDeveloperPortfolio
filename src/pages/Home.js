import React from 'react';
import About from '../components/About/About';
import Banner from '../components/Banner/Banner';
import Skill from '../components/Skill/Skill';
import Portfolio from '../components/Portfolio/Portfolio';
import { Service } from '../components/Service/Service';
import AboutService from '../components/AboutService/AboutService';
import ContactUs from '../components/ContactUs/ContactUs';

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Skill />
      <Portfolio />
      <Service />
      <AboutService />
      <ContactUs />
    </>
  )
}

export default Home;
