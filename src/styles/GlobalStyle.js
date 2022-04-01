import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    background: #fff;

    a {
      text-decoration: none;
    }

    ul {
      list-style: none;
    }

    button, input, textarea {
      outline: none;
      display: inline-block;
    }

    button {
      cursor: pointer;
    }
  }
`;

export default GlobalStyle;
