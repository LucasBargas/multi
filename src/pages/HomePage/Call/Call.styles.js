import styled from "styled-components";

export const CallContainer = styled.section`
  padding: 80px 0;
  background: #0b2341;

  @media (max-width: 390px) {
    padding: 60px 0;
  }
`;

export const CallArea = styled.div`
  text-align: center;
  color: #ffffff;

  h3 {
    font-family: 'Raleway', sans-serif;
    font-size: 1.75rem;
  }

  p {
    margin: .5rem 0 1.625rem 0 ;
  }
`;