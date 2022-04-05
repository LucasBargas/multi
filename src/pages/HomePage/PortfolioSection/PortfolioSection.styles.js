import styled, { keyframes } from "styled-components";

const ProductContentShow = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 30px, 0);
    
  } to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const imageAnimation = keyframes`
  from {
    transform: translate3d(0, 30px, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
`;

export const PortfolioContainer = styled.section`
  padding: 60px 0;
`;

export const NavContainer = styled.nav`
  ul {
    display: flex;
    justify-content: center;

    li {
      text-transform: uppercase;
      font-family: "Poppins", sans-serif;
      font-weight: 600;
      font-size: .875rem;
      color: #0b2341;
      cursor: pointer;
      padding: .5rem 1rem;
      transition: .5s;

      &:hover {
        color: #ed502e;
      }

      &.active {
        color: #ed502e;
      }
    }
  }
`;

export const PortofioArea = styled.div`
  padding-top: 1.25rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 820px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }

  figure {
    position: relative;
    animation: ${imageAnimation} .4s forwards;
  }
`;

export const ProductContent = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  &:hover {
    div {
      animation: ${ProductContentShow} .4s forwards;

      @media (max-width: 1024px) {
        animation: none;
      }
    }
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    bottom: 15px;
    background: rgba(255, 255, 255, 0.9);
    padding: 15px;
    width: 90%;
    opacity: 0;

    @media (max-width: 1024px) {
      opacity: 1;
    }
  }

  h3 {
    color: #0b2341;
    font-weight: 600;
    font-size: 1.125rem;
    font-family: 'Raleway', sans-serif;
  }

  span {
    display: block;
    margin-top: 8px;
    color: #1a5298;
    font-size: .875rem;
  }

  svg {
    color: #123a6d;
    font-size: 1.25rem;
    transition: .5s;

    &:last-of-type {
      margin-left: 5px;
    }

    &:hover {
      color: #ed502e;
    }
  }
`;