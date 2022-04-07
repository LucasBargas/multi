import React from 'react';
import * as S from './ContactSection.styles';
import Container from '../../../styles/Container';
import Title from '../../../components/Title/Title';
import ContactDatas from './ContactDatas/ContactDatas';
import ContactForm from './ContactForm/ContactForm';

const ContactSection = () => {
  return (
    <S.ContactContainer id='contact'>
      <Container>
        <Title subTitle='Contact'>Contact Us</Title>
        <S.ContactArea>
          <ContactDatas />
          <ContactForm />
        </S.ContactArea>
      </Container>
    </S.ContactContainer>
  )
}

export default ContactSection;
