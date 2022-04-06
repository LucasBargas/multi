import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% {
    transform: scale(1, 1);
  }
  50% {
    opacity: 0.3;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
`;

export const WhyUsContainer = styled.section`
  background: #f6f9fd;
  display: flex;

  @media (max-width: 820px) {
    flex-direction: column;
  }
`;

export const WhyUsVideo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${({ img }) => img});
  background-position: center;
  background-size: cover;
  width: 45%;

  @media (max-width: 820px) {
    height: 400px;
    width: 100%;
  }
`;

export const ButtonPlay = styled.button`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ed502e;
  box-shadow: 0 0 0 0 rgba(#ed502e, .5);
  position: relative;
  animation: ${pulse} 1.2s ease infinite;

  &:hover {
    animation: none;
  }

  svg {
    color: #ffffff;
    font-size: 1.5rem;
  }
`;

export const WhyUsList = styled.div`
  padding: 60px 100px;
  width: 55%;

  @media (max-width: 1024px) {
    padding: 60px 12px;
  }

  @media (max-width: 820px) {
    width: 100%;
  }

  h2 {
    font-weight: 400;
    font-family: 'Raleway', sans-serif;
    font-size: 2.125rem;
    margin-bottom: .5rem;
    color: #123a6d;

    @media (max-width: 360px) {
      font-size: 2rem;
    }
  }

  p {
    color: #848484;
    font-size: .9375rem;
  }
`;