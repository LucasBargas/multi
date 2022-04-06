import * as S from './TeamSection.styles';
import Container from '../../../styles/Container';
import Title from '../../../components/Title/Title';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import TeamMemberOne from '../../../assets/img/team/team-1.jpg';
import TeamMemberTwo from '../../../assets/img/team/team-2.jpg';
import TeamMemberThree from '../../../assets/img/team/team-3.jpg';
import TeamMemberFour from '../../../assets/img/team/team-4.jpg';

const TeamSection = () => {
  return (
    <S.TeamContainer id='team'>
      <Container>
        <Title subTitle='team'>Check Our Team</Title>
        <S.TeamArea>
          <S.TeamPhoto>
            <figure>
              <img src={TeamMemberOne} alt="Tem Member Executive" />
            </figure>
            <S.TeamMemberInfo>
              <S.TeamMemberMedias>
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </a>
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
              </S.TeamMemberMedias>
            </S.TeamMemberInfo>
          </S.TeamPhoto>

          <S.TeamPhoto>
            <figure>
              <img src={TeamMemberTwo} alt="Team Member Manager" />
            </figure>
            <S.TeamMemberInfo>
              <S.TeamMemberMedias>
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </a>
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
              </S.TeamMemberMedias>
            </S.TeamMemberInfo>
          </S.TeamPhoto>

          <S.TeamPhoto>
            <figure>
              <img src={TeamMemberThree} alt="Team Member CTO" />
            </figure>
            <S.TeamMemberInfo>
              <S.TeamMemberMedias>
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </a>
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
              </S.TeamMemberMedias>
            </S.TeamMemberInfo>
          </S.TeamPhoto>
          
          <S.TeamPhoto>
            <figure>
              <img src={TeamMemberFour} alt="Team Member Accountant" />
            </figure>
            <S.TeamMemberInfo>
              <S.TeamMemberMedias>
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </a>
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
              </S.TeamMemberMedias>
            </S.TeamMemberInfo>
          </S.TeamPhoto>
        </S.TeamArea>
      </Container>
    </S.TeamContainer>
  )
}

export default TeamSection;
