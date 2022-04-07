import styled from 'styled-components';

export const ContactContainer = styled.div`
  padding: 60px 0;
  background: #f6f9fd;
`;

export const ContactArea = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: flex-start;
  gap: 1.5rem;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;