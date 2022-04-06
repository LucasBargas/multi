import styled from 'styled-components';

export const FaqListArea = styled.ul`
  li {
    display: flex;
    gap: 2.75rem;
    padding: 30px 0;
    border-bottom: 1px solid #e9f1fb;

    @media (max-width: 820px) {
      flex-direction: column;
      gap: .5rem;
    }
  }
`;

export const FaqIcon = styled.span`
  font-size: 1rem;
  color: #669ee5;
  margin-right: 7px;
`;

export const FaqAsk = styled.h4`
  display: flex;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  width: 40%;

  @media (max-width: 820px) {
    width: 100%;
  }
`;

export const FaqAnswer = styled.p`
  width: 60%;

  @media (max-width: 820px) {
    width: 100%;
  }
`;