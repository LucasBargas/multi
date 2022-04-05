import { useEffect, useState } from 'react';
import Container from '../../../styles/Container';
import * as S from './Header.styles';
import Logo from './Logo/Logo';
import Nav from './Nav/Nav';

const Header = ({ sections }) => {
  const [height, setHeight] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) setHeight(false);
      else if (window.pageYOffset < 100) setHeight(true);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <S.HeaderFixed height = {height}>
      <Container>
        <S.HeaderArea>
          <Logo />
          <Nav sections={sections} />
        </S.HeaderArea>
      </Container>
    </S.HeaderFixed>
  )
}

export default Header;
