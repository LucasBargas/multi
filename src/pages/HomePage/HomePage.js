import React from 'react';
import BtnReturn from '../../components/ButtonReturn/ButtonReturn';
import Header from '../../components/Header/Header';
import AboutSection from './AboutSection/AboutSection';
import WhyUsSection from './WhyUsSection/WhyUsSection';
import HomePageContainer from './HomePage.styles';
import InitialSlider from './InitialSlider/InitialSlider';
import ServicesSection from './ServicesSection/ServicesSection';
import CallSection from './CallSection/CallSection';
import PortfolioSection from './PortfolioSection/PortfolioSection';

const HomePage = () => {
  return (
    <>
      <Header />
        <HomePageContainer>
        <InitialSlider />
        <BtnReturn />
        <AboutSection />
        <WhyUsSection />
        <ServicesSection />
        <CallSection />
        <PortfolioSection />
      </HomePageContainer>
    </>
  )
}

export default HomePage;
