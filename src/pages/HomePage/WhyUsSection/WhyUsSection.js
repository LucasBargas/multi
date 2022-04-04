import * as S from './WhyUsSection.styles';
import Img from '../../../assets/img/why-us.jpg';
import { BsFillPlayFill } from 'react-icons/bs';
import OrderedList from './OrderedList/OrderedList';

const WhyUsSection = () => {
  return (
    <S.WhyUsContainer>
      <S.WhyUsVideo img={Img}>
        <S.ButtonPlay>
          <BsFillPlayFill />
        </S.ButtonPlay>
      </S.WhyUsVideo>

      <S.WhyUsList>
        <h2>Eum ipsam laborum deleniti <strong>velit pariatur architecto</strong></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit</p>
        <OrderedList />
      </S.WhyUsList>
    </S.WhyUsContainer>
  )
}

export default WhyUsSection;
