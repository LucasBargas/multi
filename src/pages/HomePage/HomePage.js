import { useRef } from 'react';
import BtnReturn from '../../components/ButtonReturn/ButtonReturn';
import Header from '../HomePage/Header/Header';
import AboutSection from './AboutSection/AboutSection';
import WhyUsSection from './WhyUsSection/WhyUsSection';
import HomePageContainer from './HomePage.styles';
import InitialSlider from './InitialSlider/InitialSlider';
import ServicesSection from './ServicesSection/ServicesSection';
import CallSection from './CallSection/CallSection';
import PortfolioSection from './PortfolioSection/PortfolioSection';
import UserContext from '../../helpers/UserContext';

const HomePage = () => {
  const sections = useRef();
 
  return (
    <>
      <UserContext.Provider value={sections}>
        <Header />
        <HomePageContainer ref={sections}>
          <InitialSlider />
          <BtnReturn />
          <AboutSection />
          <WhyUsSection />
          <ServicesSection />
          <CallSection />
          <PortfolioSection />
        </HomePageContainer>
      </UserContext.Provider>
    </>
  )
}

export default HomePage;
