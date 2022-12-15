import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 18px
  }

  :root { 
    width: 100vw;
    height: 100vh;
    font-family: sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  input, button {
    outline: none;
    border: none;
  }

  svg {
    size: 20px;
  }
`;
