import styled, { css } from 'styled-components';

export const HeaderFixed = styled.header`
  display: flex;
  align-items: center;
  background: #ffffff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: ${({ height }) => (height ? '82px' : '65px')};
  transition: .5s;

  ${({ height }) => height === false && css`
    box-shadow: 0px 2px 15px rgba(0, 0, 0, .1);
  `}

  @media (max-width: 414px) {
    height: ${({ height }) => (height ? '70px' : '60px')};
  }
`;

export const HeaderArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;