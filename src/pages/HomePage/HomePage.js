import HomePageContainer from './HomePage.styles';
import AboutSection from '../../templates/AboutSection/AboutSection';
import WhyUsSection from '../../templates/WhyUsSection/WhyUsSection';
import InitialSlider from '../../templates/InitialSlider/InitialSlider';
import ServicesSection from '../../templates/ServicesSection/ServicesSection';
import CallSection from '../../templates/CallSection/CallSection';
import PortfolioSection from '../../templates/PortfolioSection/PortfolioSection';
import TeamSection from '../../templates/TeamSection/TeamSection';
import PricesSection from '../../templates/PricesSection/PricesSection';
import FaqContainer from '../../templates/FaqSection/FaqSection';
import ContactSection from '../../templates/ContactSection/ContactSection';

const HomePage = ({ sections }) => {
  return (
    <HomePageContainer ref={sections}>
      <InitialSlider />
      <AboutSection />
      <WhyUsSection />
      <ServicesSection />
      <CallSection />
      <PortfolioSection />
      <TeamSection />
      <PricesSection />
      <FaqContainer />
      <ContactSection />
    </HomePageContainer>
  );
};

export default HomePage;
