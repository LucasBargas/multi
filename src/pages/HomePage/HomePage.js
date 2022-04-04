import React from 'react';
import BtnReturn from '../../components/ButtonReturn/ButtonReturn';
import AboutSection from './AboutSection/AboutSection';
import WhyUsSection from './WhyUsSection/WhyUsSection';
import HomePageContainer from './HomePage.styles';
import InitialSlider from './InitialSlider/InitialSlider';
import ServicesSection from './ServicesSection/ServicesSection';

const HomePage = () => {
  return (
    <HomePageContainer>
      <InitialSlider />
      <BtnReturn />
      <AboutSection />
      <WhyUsSection />
      <ServicesSection />
    </HomePageContainer>
  )
}

export default HomePage;
