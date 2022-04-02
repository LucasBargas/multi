import { useEffect, useState } from 'react';
import Container from '../../styles/Container';
import Logo from './Logo/Logo';
import Nav from './Nav/Nav';
import * as S from './Header.styles';

const Header = () => {
  const [height, setHeight] = useState(true);

  useEffect(() => {
    const handleScroll = (e) => {
      if (window.pageYOffset > 300) {
        setHeight(false);

      } else if (window.pageYOffset < 300) {
        setHeight(true);
      }
    }

    window.addEventListener('scroll', handleScroll);
  }, [])

  return (
    <S.HeaderFixed height = {height}>
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
