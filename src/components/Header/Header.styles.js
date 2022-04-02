import styled from 'styled-components';

export const HeaderFixed = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  padding: 1rem 0;
`;

export const HeaderArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;