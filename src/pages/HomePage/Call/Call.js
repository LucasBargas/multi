import React from 'react';
import * as S from './Call.styles';
import Container from '../../../styles/Container';
import Button from '../../../components/Button/Button';

const Call = () => {
  return (
    <S.CallContainer>
      <Container>
        <S.CallArea>
          <h3>Call To Action</h3>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <Button
            borderColor='#ed502e'
            hoverColor='#ed502e'
            fontColor='#ffffff'
            buttonColor='#0b2341'
          >
            Call to Action
          </Button>
        </S.CallArea>
      </Container>
    </S.CallContainer>
  )
}

export default Call;
