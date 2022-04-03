import styled, { keyframes } from 'styled-components';

export const titleAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -60px, 0);
  }
  to {
    opacity: 1;
    transform: initial;
  }
`;

export const textAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 60px, 0);
  }
  to {
    opacity: 1;
    transform: initial;
  }
`;

export const buttonAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 40px, 0);
  }
  to {
    opacity: 1;
    transform: initial;
  }
`;

export const SliderContainer = styled.section`
  position: relative;
  z-index: 1;
  height: calc(100vh - 82px);
  background: #0b2341;

  @media (max-width: 414px) {
    height: calc(100vh - 70px);
  }
`;

export const SliderBackground = styled.div`
  display: flex;
  align-items: center;
  height: calc(100vh - 82px);
  width: 100%;
  background-position: center;
  background-size: cover;
  background-image: url(${({ image }) => image});
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: .6s;

  &.active {
    opacity: 1;
    z-index: 2;

    h2 {
      animation: ${titleAnimation} 1s forwards;
    }

    p {
      animation: ${textAnimation} 1s forwards .4s;
    }

    a {
      animation: ${buttonAnimation} 1s forwards .8s;
    }
  }

  &::after {
    content: '';
    background: rgba(4, 12, 21, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  h2, p, a {
    opacity: 0;
  }

  @media (max-width: 414px) {
    height: calc(100vh - 70px);
  }
`;

export const SliderContent = styled.div`
  position: relative;
  z-index: 3;

  @media (max-width: 1024px) {
    text-align: center;
  }

  h2, p {
    color: #fff;
  }

  h2 {
    font-size: 3rem;
    font-family: 'Raleway', sans-serif;

    @media (max-width: 480px) {
      font-size: 2rem;
    }
  }

  p {
    font-family: 'Open Sans', sans-serif;
    width: 50%;
    margin: 10px 0 30px 0;

    @media (max-width: 1024px) {
      margin: 10px auto 30px auto;
      width: 80%;
    }

    @media (max-width: 480px) {
      width: 100%;
    }
  }
`;

export const ArrowButtons = styled.div`
  display: flex;
  padding: 0 10px;

  button {
    width: 54px;
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, .2);
    border-radius: 50%;
    transition: .4s;
    position: absolute;
    z-index: 4;
    top: 50%;

    &:first-of-type {
      left: 10px;
    }

    &:last-of-type {
      right: 10px;
    }

    @media (max-width: 480px) {
      display: none;
    }

    svg {
      font-size: 1.5rem;
      color: rgba(255, 255, 255, .5);
      transition: .4s;
    }

    &:hover {
      background: rgba(255, 255, 255, .3);

      svg {
        color: rgba(255, 255, 255, .7);
      }
    }
  }
`;