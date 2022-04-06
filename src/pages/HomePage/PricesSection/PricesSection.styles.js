import styled from 'styled-components';

export const PricesContainer = styled.section`
  padding: 60px 0;
`;

export const PricesArea = styled.div`
  padding-top: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 820px) {
    justify-content: center;
    grid-template-columns: 50%;
  }

  @media (max-width: 820px) {
    justify-content: center;
    grid-template-columns: 100%;
  }
`;

export const PricesContent = styled.div`
  &:first-of-type, &:last-of-type {
    padding: 80px 40px;
    box-shadow: 0px 5px 90px 0px rgba(110, 123, 131, .1);

    @media (max-width: 1024px) {
      padding: 80px 20px;
    }
  }

  &:nth-of-type(2) {
    padding: 100px 40px;
    border: 4px solid #ed502e;

    @media (max-width: 1024px) {
      padding: 80px 20px;
    }
  }

  div {
    text-align: center;

    h3 {
      font-family: 'Raleway', sans-serif;
      font-size: 1.75rem;
      font-weight: 300;
      margin-bottom: 15px;
    }

    h4 {
      color: #0b2341;
      font-weight: 400;
      font-size: 2.875rem;

      span {
        display: block;
        color: #bababa;
        font-size: 1.125rem;
      }
    }
  }

  ul {
    padding-top: 25px;
    display: flex;
    flex-direction: column;
    gap: 12px;

    li {
      color: #999999;

      svg {
        font-size: 1.25rem;
        position: relative;
        top: 3px;
        margin-right: 5px;
      }
    }
  }
`;

export const PricesContentBtn = styled.div`
  padding-top: 1.75rem;
  text-align: center;

  a:hover {
    color: #ffffff;
  }
`;