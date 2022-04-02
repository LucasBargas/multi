import styled from 'styled-components';

export const SliderContainer = styled.section`
  position: relative;
  z-index: 1;
`;

export const SliderBackground = styled.div`
  display: flex;
  align-items: center;
  height: calc(100vh - 82px);
  width: 100%;
  background-position: center;
  background-size: cover;
  background-image: url(${({ image }) => image});
  position: relative;
  /* top: 0;
  left: 0; */
  z-index: 2;

  &::after {
    content: '';
    background: rgba(4, 12, 21, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 414px) {
    height: calc(100vh - 70px);
  }
`;

export const SliderContent = styled.div`
  position: relative;
  z-index: 3;

  h2, p {
    color: #fff;
  }

  h2 {
    font-size: 3rem;
    font-family: 'Raleway', sans-serif;
  }

  p {
    font-family: 'Open Sans', sans-serif;
    width: 50%;
    margin: 10px 0 30px 0;
  }
`;