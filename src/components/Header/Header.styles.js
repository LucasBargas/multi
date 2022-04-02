import styled from 'styled-components';

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