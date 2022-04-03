import React from 'react';
import BtnReturn from '../../components/ButtonReturn/ButtonReturn';
import HomePageContainer from './HomePage.styles';
import InitialSlider from './InitialSlider/InitialSlider';

const HomePage = () => {
  return (
    <HomePageContainer>
      <InitialSlider />
      <BtnReturn />
      <p>Olá</p>
    </HomePageContainer>
  )
}

export default HomePage;
