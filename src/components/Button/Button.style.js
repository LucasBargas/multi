import styled from 'styled-components';

const Btn = styled.a`
  display: inline-block;
  padding: 10px 40px;
  border: 2px solid ${({ borderColor }) => borderColor};
  background: ${({ buttonColor }) => buttonColor};
  font-family: 'Open Sans', sans-serif;
  color: ${({ fontColor }) => fontColor};
  border-radius: 4px;
  font-weight: 600;
  font-size: .875rem;
  transition: .6s;
`;

export default Btn;