import styled, { keyframes } from 'styled-components';

const modalAnimation = keyframes`
  from{
    opacity: 0;
    transform: translateY(-50px);
  }
  to{
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ModalContainer = styled.section`
  display: ${({ modal }) => (modal ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  background: rgba(4, 12, 21, .9);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 20000;
`;

export const ModalArea = styled.div`
  width: 600px;
  height: auto;
  background: #ffffff;
  border-radius: 10px;
  animation: ${modalAnimation} 0.6s forwards;

  @media (max-width: 480px) {
    width: 90%;
  }
`;

export const ButtonClose = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  button {
    height: 46px;
    width: 46px;
    background: transparent;

    svg {
      font-size: 1.5rem;
      color: #0f2f57;
    }
  }
`;

export const ModalContent = styled.div`
  text-align: center;
  padding: 0 15px 40px 15px;

  h2 {
    color: #0f2f57;
    margin-bottom: 20px;
  }

  p {
    a {
      font-weight: 700;
      color: #0f2f57;
    }
  }
`;

export const LinkToGithub = styled.a`
  display: inline-block;
  font-weight: 700;
  color: #0f2f57;
  margin: 10px 0 30px 0;

  &:hover {
    text-decoration: underline;
  }
`;

export const ViewButton = styled.button`
  background: #0f2f57;
  padding: 8px 16px;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 700;
  color: #ffffff;
`;