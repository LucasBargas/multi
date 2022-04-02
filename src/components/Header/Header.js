import Container from '../../styles/Container';
import Logo from './Logo/Logo';
import Nav from './Nav/Nav';
import * as S from './Header.styles';

const Header = () => {
  return (
    <S.HeaderFixed>
      <Container>
        <S.HeaderArea>
          <Logo />
          <Nav />
        </S.HeaderArea>
      </Container>
    </S.HeaderFixed>
  )
}

export default Header;
