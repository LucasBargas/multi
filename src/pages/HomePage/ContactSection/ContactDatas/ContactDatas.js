import * as S from './ContactDatas.styles';
import { BiMap, BiEnvelope, BiPhoneCall } from 'react-icons/bi';

const ContactDatas = () => {
  return (
    <S.ContactDatasContainer>
      <S.ContactDatasBox>
        <div>
          <BiMap />
        </div>
        <h3>Our Address</h3>
        <p>A108 Adam Street, New York, NY 535022</p>
      </S.ContactDatasBox>

      <S.ContactDatasBox>
        <div>
          <BiEnvelope />
        </div>
        <h3>Email Us</h3>

        <ul>
          <li>info@example.com</li>
          <li>contact@example.com</li>
        </ul>
      </S.ContactDatasBox>

      <S.ContactDatasBox>
        <div>
          <BiPhoneCall />
        </div>
        <h3>Call Us</h3>

        <ul>
          <li>+1 5589 55488 55</li>
          <li>+1 6678 254445 41</li>
        </ul>
      </S.ContactDatasBox>
    </S.ContactDatasContainer>
  )
}

export default ContactDatas;
