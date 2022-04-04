import styled from "styled-components";

export const AboutCardsContainer = styled.div`
  padding-top: 60px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 820px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  box-shadow: -10px -5px 40px 0 rgba(0, 0, 0, .1);
  padding: 30px;

  svg {
    color: #ed502e;
    font-size: 1.875rem;
  }

  span {
    font-size: 2.625rem;
    font-weight: 700;
    color: #0b2341;
    margin-left: 20px;

    @media (max-width: 360px) {
      font-size: 2.5rem;
    }

    @media (max-width: 276px) {
      font-size: 2rem;
    }
  }

  p, strong {
    margin-top: 5px;
    font-size: .875rem;
    font-family: 'Raleway', sans-serif;
    line-height: 1.25rem;
  }

  a {
    margin-top: 25px;
    display: inline-block;
    font-size: .9375rem;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    color: #164682;
    transition: .5s;
    
    &:hover {
      color: #2263b5;
    }
  }
`;