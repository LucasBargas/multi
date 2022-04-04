import styled from 'styled-components';

export const AboutContainer = styled.section`
  background: #fff;
  padding: 60px 0;
`;

export const AboutArea = styled.div`
  display: flex;

  @media (max-width: 820px) {
    display: block;
  }
`;

export const AboutAreaLeft = styled.div`
  width: 50%;

  @media (max-width: 820px) {
    width: 100%;
  }

  p {
    margin-bottom: 1rem;
  }

  ul {
    svg {
      margin-right: 10px;
      font-size: 1.25rem;
      position: relative;
      top: 3px;
      color: #ef6445;
    }
  }
`;

export const AboutAreaRight = styled.div`
  width: 50%;
  padding-left: 1.5rem;

  @media (max-width: 820px) {
    width: 100%;
    padding: 2rem 0 0 0;
  }

  a {
    margin-top: 1rem;

    &:hover {
      color: #ffffff;
    }
  }
`;