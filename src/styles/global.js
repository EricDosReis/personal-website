import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
  } 

  html, body {
    background-color: #16202C;
    font-size: 100%;
    margin: 0;
    padding: 0;
    vertical-align: baseline;
  }

  body {
    line-height: 1;
  }

  ol, ul {
    list-style: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`

export default GlobalStyles;
