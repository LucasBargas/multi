import styled from "styled-components";

export const ListContainer = styled.ul`
  padding-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  li {
    background: #ffffff;
    padding: 20px;

    &.active {
      p {
        margin-top: .5rem;
        height: 60px;
        visibility: visible;
        transition: .5s;

        @media (max-width: 480px) {
          height: 86px;
        }

        @media (max-width: 390px) {
          height: 100px;
        }

        @media (max-width: 360px) {
          height: 80px;
        }

        @media (max-width: 320px) {
          height: 88px;
        }

        @media (max-width: 276px) {
          height: 110px;
        }
      }

      svg {
        transform: rotate(180deg);
      }
    }
  }
`;

export const ListQuestion = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  &:hover {
    span:last-of-type , svg {
      color: #ed502e !important;

      @media (max-width: 1024px) {
        color: #0b2341 !important;
      }
    }
  }

  span {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
  }

  span:first-of-type {
    color: #ed502e;
    margin-right: 10px;
    font-size: 1.125rem;
  }

  span:last-of-type {
    color: #0b2341;
    font-size: 1rem;
  }

  svg {
    color: #0b2341;
    font-size: 1.25rem;
  }
`;

export const ListText = styled.div`
  p {
    margin-top: 0;
    overflow-y: hidden;
    visibility: hidden;
    height: 0;
    transition: .5s;
  }
`;