import { useState } from 'react';
import { BsXLg, BsList } from 'react-icons/bs';
import * as S from './Nav.styles';

const Nav = ({ sections }) => {
  const [mobile, setMobile] = useState(false);
  
  const handleOutsideClick = ({ target, currentTarget }) => {
    if (target === currentTarget) setMobile(false);
  }

  const handleNavLink = e => {
    e.preventDefault();
    setMobile(false);
    const href = e.target.getAttribute('href').replace('#', '');
    selectSections(href);
  }

  const selectSections = href => {
    const ids = Array.from(sections.current.children)
    .filter(id => id.id === href);

    const getTop = ids[0].offsetTop;
    window.scrollTo({ top: getTop - 60, behavior: 'smooth' });
  }

  return (
    <div>
      <S.NavContainer mobile={mobile} onClick={handleOutsideClick}>
        <S.NavList>
          <li><a onClick={handleNavLink} href="#home">Home</a></li>
          <li><a onClick={handleNavLink} href="#about">About</a></li>
          <li><a onClick={handleNavLink} href="#services">Services</a></li>
          <li><a onClick={handleNavLink} href="#portfolio">Portfolio</a></li>
          <li><a onClick={handleNavLink} href="#team">Team</a></li>
          <li><a onClick={handleNavLink} href="#contact">Contact</a></li>
        </S.NavList>

        <S.BtnCloseMenu onClick={() => setMobile(false)} mobile={mobile}>
          <BsXLg />
        </S.BtnCloseMenu>
      </S.NavContainer>

      <S.BtnOpenMenu onClick={() => setMobile(true)} mobile={mobile}>
        <BsList />
      </S.BtnOpenMenu>
    </div>
  )
}

export default Nav;
