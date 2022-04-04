import React from 'react';
import * as S from './AboutSection.styles';
import { BsCheckAll } from "react-icons/bs";
import Container from '../../../styles/Container';
import Title from '../../../components/Title/Title';
import Button from '../../../components/Button/Button';

const AboutSection = () => {
  return (
    <S.AboutContainer>
      <Container>
        <Title subTitle='About'>About Us</Title>
        <S.AboutArea>
          <S.AboutAreaLeft>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            <ul>
              <li><span><BsCheckAll /></span>Ullamco laboris nisi ut aliquip ex ea commodo consequat;</li>
              <li><span><BsCheckAll /></span>Duis aute irure dolor in reprehenderit in voluptate velit;</li>
              <li><span><BsCheckAll /></span>llamco laboris nisi ut aliquip ex ea commodo consequat.</li>
            </ul>
          </S.AboutAreaLeft>
          
          <S.AboutAreaRight>
            <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <Button
              borderColor='#ef6445'
              buttonColor='#ffffff'
              fontColor='#ef6445'
              hoverColor='#ef6445'
            >
              Learn More
            </Button>
          </S.AboutAreaRight>
        </S.AboutArea>
      </Container>
    </S.AboutContainer>
  )
}

export default AboutSection;
