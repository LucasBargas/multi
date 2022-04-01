import { useState } from 'react';
import { BsXLg, BsList } from 'react-icons/bs';
import * as S from './Nav.styles';

const Nav = () => {
  const [mobile, setMobile] = useState(true);

  return (
    <div>
      <S.NavContainer mobile={mobile}>
        <S.NavList>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#contact">Contact</a></li>
        </S.NavList>

        <S.ButtonClose onClick={() => setMobile(false)} mobile={mobile}>
          <BsXLg />
        </S.ButtonClose>
      </S.NavContainer>

      <S.ButtonMenu onClick={() => setMobile(true)} mobile={mobile}>
        <BsList />
      </S.ButtonMenu>
    </div>
  )
}

export default Nav;
