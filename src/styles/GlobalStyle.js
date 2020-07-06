import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  a {
    text-decoration: none
  }
`;

export default GlobalStyle;