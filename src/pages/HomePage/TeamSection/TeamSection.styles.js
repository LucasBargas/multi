import styled from 'styled-components';

export const TeamContainer = styled.section`
  padding: 60px 0;
  background: #f6f9fd;
`;

export const TeamArea = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;

  @media (max-width: 820px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const TeamPhoto = styled.div`
  position: relative;
`;

export const TeamMemberInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &:hover {
    div {
      opacity: 1;
      transition: .6s;
    }
  }
`;

export const TeamMemberMedias = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  background: rgba(11, 35, 65, .7);
  height: 100%;
  width: 50px;
  opacity: 0;
  transition: .6s;

  @media (max-width: 1024px) {
    opacity: 1;
  }

  a {
    color: #ffffff;
    font-size: 1.15rem;
    transition: .6s;
    margin-top: 12px;

    &:hover {
      color: #ed502e;
    }
  }
`;