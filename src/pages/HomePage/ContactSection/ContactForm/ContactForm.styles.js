import styled, { keyframes } from 'styled-components';

const msgAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const ContactFormContainer = styled.div`
  box-shadow: 0 0 30px rgba(214, 215, 216, .6);
  background: #ffffff;
  padding: 30px;

  @media (max-width: 320px) {
    padding: 20px;
  }

  form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;

    @media (max-width: 480px) {
      grid-template-columns: 1fr;
    }
  }

  input {
    padding: 10px 15px;
  }

  input:last-of-type, textarea {
    grid-column: 1 / 3;

    @media (max-width: 480px) {
      grid-column: 1 / 1;
    }
  }

  textarea {
    resize: none;
    padding: 12px 15px;
  }

  input, textarea {
    border: 1px solid #ced4da;
    color: #212529;
    font-weight: 400;
    font-family: 'Open Sans', sans-serif;
    transition: .5s;

    &:focus {
      border-color: #ed502e;
    }
  }
`;

export const AlertMsg = styled.div`
  grid-column: 1 / 3;
  display: flex;
  gap: 1rem;
  background: #0b2341;
  color: #ffffff;
  padding: 10px;
  animation: ${msgAnimation} .6s forwards;

  @media (max-width: 480px) {
    grid-column: 1 / 1;
  }

  p {
    text-shadow: 2px 2px 2px rgb(0 0 0 / 60%);
    font-size: 0.875rem;
    width: 100%;
  }

  button {
    background: transparent;
    padding: 0 5px;
    svg {
      font-size: 1.25rem;
      color: #ffffff;
    }
  }
`;

export const SendForm = styled.div`
  grid-column: 1 / 3;
  text-align: center;

  @media (max-width: 480px) {
    grid-column: 1 / 1;
  }
`;

export const ButtonForm = styled.button`
  display: inline-block;
  padding: 10px 30px;
  border: 2px solid ${({ borderColor }) => borderColor};
  background: ${({ buttonColor }) => buttonColor};
  font-family: 'Open Sans', sans-serif;
  color: ${({ fontColor }) => fontColor};
  border-radius: 4px;
  font-weight: 600;
  font-size: .875rem;
  transition: .4s;

  &:hover {
    background: ${({ hoverColor }) => hoverColor};
  }
`;