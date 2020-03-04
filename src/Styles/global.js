import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 50;
    padding: 50;
  }

  html, body, #root{
    min-height: 100%;
  }

  body{
    background: #e0f2f1;
  }
`;
