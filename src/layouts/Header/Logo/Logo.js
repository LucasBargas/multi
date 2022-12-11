import { NavLink } from 'react-router-dom';
import * as S from './Logo.styles';

const Logo = () => {
  return (
    <S.Logo>
      <NavLink
        to="/"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        Multi
      </NavLink>
    </S.Logo>
  );
};

export default Logo;
