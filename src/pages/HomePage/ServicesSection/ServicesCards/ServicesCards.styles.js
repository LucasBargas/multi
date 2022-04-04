import styled from 'styled-components';

export const ServicesCardsArea = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 820px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const ServicesCardsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 5px 90px 0px rgba(110, 123, 131, .1);
  padding: 80px 10px;
  text-align: center;
  background: #fefefe;
  transition: .3s;

  &:hover {
    background: #ed502e;

    h3, p {
      color: #ffffff;
    }

    div {
      background: #ffffff;
    }

    svg {
      color: #ed502e;
    }
  }

  h3 {
    margin: 1.25rem 0 1rem 0;
    font-family: 'Raleway', sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    color: #0b2341;
    transition: .3s;
  }

  p {
    font-size: .875rem;
    line-height: 24px;
    transition: .3s;
  }
`;

export const ServicesCardsIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ed502e;
  width: 64px;
  height: 64px;
  border-radius: 5px;
  position: relative;
  transition: .3s;
  z-index: 12;

  svg {
    color: #ffffff;
    font-size: 1.75rem;
    transition: .3s;
  }
`;