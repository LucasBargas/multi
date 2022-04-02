import { Link } from 'react-router-dom';
import * as S from './Logo.styles'

const Logo = () => {
  return (
    <S.Logo>
      <Link to='/'>Multi</Link>
    </S.Logo>
  )
}

export default Logo;
