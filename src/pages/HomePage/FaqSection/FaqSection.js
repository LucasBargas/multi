import React from 'react';
import FaqContainer from './FaqSection.styles';
import Container from '../../../styles/Container';
import Title from '../../../components/Title/Title';
import FaqList from './FaqList/FaqList';

const FaqSection = () => {
  return (
    <FaqContainer>
      <Container>
        <Title subTitle='F.A.Q'>Frequently Asked Questions</Title>
        <FaqList />
      </Container>
    </FaqContainer>
  )
}

export default FaqSection;