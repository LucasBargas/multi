import styled from "styled-components";

const BtnReturn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ed502e;
  width: 40px;
  height: 40px;
  border-radius: .25rem;
  transition: .5s;
  position: fixed;
  right: 15px;
  bottom: 15px;
  z-index: 999;
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  opacity: ${({ visible }) => (visible ? '1' : '0')};

  @media (max-width: 320px) {
    width: 35px;
    height: 35px;
    right: 10px;
    bottom: 10px;
  }

  &:hover {
    background: #fa785c;
  }

  svg {
    font-size: 1rem;
    color: #ffffff;
  }
`;

export default BtnReturn;