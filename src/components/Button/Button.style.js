import styled from 'styled-components';

const Btn = styled.button`
  padding: 10px 40px;
  border: 2px solid ${({ borderColor }) => borderColor};
  background: ${({ buttonColor }) => buttonColor};
  font-family: 'Open Sans', sans-serif;
  color: ${({ fontColor }) => fontColor};
  font-weight: 600;
`;

export default Btn;