import styled from "styled-components";

const TitleContainer = styled.div`
  padding-bottom: 40px;

  @media (max-width: 360px) {
    padding-bottom: 30px;
  }

  h2, h3 {
    text-transform: uppercase;
    font-family: 'Poppins', sans-serif;
  }

  h3 {
    color: #aaaaaa;
    font-size: .875rem;
    letter-spacing: 2px;

    &::after {
      content: "";
      width: 120px;
      height: 1px;
      display: inline-block;
      background: #f38b74;
      margin: 4px 10px;
    }
  }

  h2 {
    font-size: 2.25rem;
    color: #0f2f57;

    @media (max-width: 360px) {
      font-size: 2rem;
    }
  }
`;

export default TitleContainer;
