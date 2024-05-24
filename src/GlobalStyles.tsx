import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  body {
    font-family: 'source serif 4';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #FEF5FF;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  
  h1 {
    font-size: 2rem;
    font-weight: bold;
  }
  
  h2 {
    font-size: 1.5rem;
  }
  
  h3 {
    font-size: 1.25rem;
  }
  
  h4 {
    font-size: 1.2rem;    
  }
  
  h5 {
    font-size: 1rem;
  }

  h6 {
    font-size: .8rem;
  }
  
  p {
    line-height: 1.5;
    margin: 0 0 1.5 0;
  }

  button {
    font: inherit;
    cursor: pointer;
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    outline: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style-type: none;
  }

`;

export default GlobalStyles;
