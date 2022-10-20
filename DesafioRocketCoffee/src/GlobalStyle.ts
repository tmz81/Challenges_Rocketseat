import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --bg-color: #000;
    --text-color: #FFF;
    --button: #8257E5;
    --border: #29292E;
    --border-menu-mobile: #A8A8B3;
    --text-color-menu-mobile: #E1E1E6;
  }

  body {
    overflow: hidden;
    font-family: 'Manrope', sans-serif;
    background-color: var(--bg-color);
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`;
