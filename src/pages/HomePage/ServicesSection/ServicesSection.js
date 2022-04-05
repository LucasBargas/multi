import SectionContainer from './ServicesSection.styles';
import Container from '../../../styles/Container';
import Title from '../../../components/Title/Title';
import ServicesCards from './ServicesCards/ServicesCards';

const ServicesSection = () => {
  return (
    <SectionContainer id='services'>
      <Container>
        <Title subTitle='Services'>Check Our Services</Title>
        <ServicesCards />
      </Container>
    </SectionContainer>
  )
}

export default ServicesSection;
