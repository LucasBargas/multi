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
import TeamSection from './TeamSection/TeamSection';
import PricesSection from './PricesSection/PricesSection';
import FaqContainer from './FaqSection/FaqSection';
import Modal from './Modal/Modal';

const HomePage = () => {
  const sections = useRef();
 
  return (
    <>
      <Header sections={sections} />
      <HomePageContainer ref={sections}>
        <InitialSlider />
        <BtnReturn />
        <AboutSection />
        <WhyUsSection />
        <ServicesSection />
        <CallSection />
        <PortfolioSection />
        <TeamSection />
        <PricesSection />
        <FaqContainer />
        <Modal />
      </HomePageContainer>
    </>
  )
}

export default HomePage;
