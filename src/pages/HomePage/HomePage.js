import React from 'react';
import BtnReturn from '../../components/ButtonReturn/ButtonReturn';
import AboutSection from './AboutSection/AboutSection';
import HomePageContainer from './HomePage.styles';
import InitialSlider from './InitialSlider/InitialSlider';

const HomePage = () => {
  return (
    <HomePageContainer>
      <InitialSlider />
      <BtnReturn />
      <AboutSection />
    </HomePageContainer>
  )
}

export default HomePage;
