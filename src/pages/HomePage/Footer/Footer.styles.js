import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background: #071527;

  a {
    color: #ffffff;
  }
`;

export const FooterTopArea = styled.div`
  display: flex;
  padding: 60px 0 30px 0;
  color: #ffffff;
  gap: 1.5rem;
  border-bottom: 1px solid #0f2f57;

  @media (max-width: 820px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

export const FooterInfo = styled.div`
  background: #05101e;
  border-top: 4px solid #ed502e;
  text-align: center;
  padding: 30px 20px;
  font-family: 'Raleway', sans-serif;
  font-size: .875rem;
  width: 30%;

  @media (max-width: 820px) {
    width: 100%;
  }

  h3 {
    font-size: 1.5rem;
  }

  p {
    margin-top: 1.5rem;
    font-style: italic;
  }

  ul:first-of-type {
    padding-top: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 5px;

    li:nth-of-type(3) {
      margin-top: 1.25rem;
    }
  }
`;

export const FooterMedias = styled.ul`
  padding-top: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .5rem;

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    width: 36px;
    height: 36px;
    transition: .3s;
    background: #0a1e38;
    cursor: pointer;

    &:hover {
      background: #ed502e;
    }

    svg {
      color: #ffffff;
      font-size: 1rem;
    }
  }
`;

export const FooterTitle = styled.h4`
  font-family: "Raleway", sans-serif;
  font-size: 1rem;
  font-weight: 600;
`;

export const FooterList = styled.div`
  width: 17%;

  @media (max-width: 820px) {
    width: 100%;
  }

  ul {
    padding-top: 1.25rem;

    li {
      &:not(:last-of-type) {
        margin-bottom: 1rem;
      }

      a {
        font-size: .875rem;
        transition: .3s;

        &:hover {
          color: #ed502e;
        }
      }

      svg {
        position: relative;
        top: 2px;
        color: #ed502e;
      }
    }
  }
`;

export const FooterNewsletter = styled.div`
  width: 36%;

  @media (max-width: 820px) {
    width: 100%;
  }

  p {
    font-size: .875rem;
    margin: 1rem 0 2rem 0;
  }

  form {
    display: flex;

    input {
      width: 100%;
      padding: 0 .75rem;
      display: block;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      border: none;
    }

    button {
      font-size: 1rem;
      padding: 0 1.25rem 2px 1.25rem;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      height: 41px;
      background: #ed502e;
      color: #ffffff;
      transition: .3s;
      display: block;
    }
  }
`;

export const FooterBottomArea = styled.div`
  padding: 30px 0;
  text-align: center;
  color: #ffffff;

  p:first-of-type {
    margin-bottom: 1rem;
  }

  a {
    font-weight: 700;
  }
`;