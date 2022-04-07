import * as S from './Footer.styles';
import Container from '../../../styles/Container';
import { FaTwitter, FaFacebookF, FaInstagram, FaSkype, FaLinkedinIn } from 'react-icons/fa';
import { FiChevronRight } from 'react-icons/fi';

const Footer = () => {
  return (
    <S.FooterContainer>
      <Container>
        <S.FooterTopArea>
          <S.FooterInfo>
            <h3>Multi</h3>
            <p>Qui repudiandae et eum dolores alias sed ea. Qui suscipit veniam excepturi quod.</p>

            <ul>
              <li>A108 Adam Street</li>
              <li>NY 535022, USA</li>
              <li><strong>Phone:</strong> +1 5589 55488 55</li>
              <li><strong>Email:</strong> info@example.com</li>
            </ul>

            <S.FooterMedias>
              <li><FaTwitter /></li>
              <li><FaFacebookF /></li>
              <li><FaInstagram /></li>
              <li><FaSkype /></li>
              <li><FaLinkedinIn /></li>
            </S.FooterMedias>
          </S.FooterInfo>

          <S.FooterList>
            <S.FooterTitle>Useful Links</S.FooterTitle>
            <ul>
              <li>
                <a href='#home'><FiChevronRight /> Home</a>
              </li>
              <li>
                <a href='#about'><FiChevronRight /> About us</a>
              </li>
              <li>
                <a href='#services'><FiChevronRight /> Services</a>
              </li>
              <li>
                <a href='#term-of-service'><FiChevronRight /> Term of service</a>
              </li>
              <li>
                <a href='#privacy-policy'><FiChevronRight /> Privacy policy</a>
              </li>
            </ul>
          </S.FooterList>

          <S.FooterList>
            <S.FooterTitle>Our Services</S.FooterTitle>
            <ul>
              <li>
                <a href='#web-design'><FiChevronRight /> Web Design</a>
              </li>
              <li>
                <a href='#web-development'><FiChevronRight /> Web Development</a>
              </li>
              <li>
                <a href='#product-management'><FiChevronRight /> Product Management</a>
              </li>
              <li>
                <a href='#marketing'><FiChevronRight /> Marketing</a>
              </li>
              <li>
                <a href='#graphic-design'><FiChevronRight /> Graphic Design</a>
              </li>
            </ul>
          </S.FooterList>

          <S.FooterNewsletter>
            <S.FooterTitle>Our Newsletter</S.FooterTitle>
            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
            <form>
              <input type="email" />
              <button>Subscribe</button>
            </form>
          </S.FooterNewsletter>
        </S.FooterTopArea>

        <S.FooterBottomArea>
          <p>© Copyright <strong>Multi</strong>. All Rights Reserved</p>
          <p>Esta aplicação web é uma réplica desenvolvida por <a target="_blank" href="https://projetoslucasbargas.com/" rel="noopener noreferrer">Lucas Bargas</a> com base em um layout gratuito disponibilizado na web. Porém, toda a codificação é própria.</p>
        </S.FooterBottomArea>
      </Container>
    </S.FooterContainer>
  )
}

export default Footer;
