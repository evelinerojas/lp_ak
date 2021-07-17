import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesAuthor from '../components/sections/FeaturesAuthor';
import FeaturesBooks from '../components/sections/FeaturesBooks';

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesBooks/>
      <FeaturesAuthor invertMobile topDivider imageFill className="illustration-section-02" />
    </>
  );
}

export default Home;