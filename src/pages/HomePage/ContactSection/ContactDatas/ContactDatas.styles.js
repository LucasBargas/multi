import styled from 'styled-components';

export const ContactDatasContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const ContactDatasBox = styled.div`
  color: #0b2341;
  text-align: center;
  box-shadow: 0 0 30px rgba(214, 215, 216, .6);
  padding: 20px 0 30px 0;
  background: #ffffff;

  &:first-of-type {
    grid-row: 1 / 2;
    grid-column: 1 / 3;

    @media (max-width: 480px) {
      grid-row: 1 / 1;
      grid-column: 1 / 1;
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 52px;
    height: 52px;
    border: 2px dotted #fbdad2;
    border-radius: 50%;
    margin: 0 auto;

    svg {
      font-size: 2rem;
      color: #ed502e;
    }
  }

  h3 {
    color: #777777;
    font-size: 1.25rem;
    margin: 7px 0 10px 0;
    font-family: 'Raleway', sans-serif;
  }

  p, li {
    color: #0b2341;
    font-size: .875rem;
  }

  li:last-of-type {
    margin-top: 5px;
  }
`;