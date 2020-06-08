import { createGlobalStyle } from "styled-components";
import { darkTheme, lightTheme } from "./themes";

type GlobalProps = {
  isDarkMode?: boolean;
};

export const GlobalStyle = createGlobalStyle<GlobalProps>`

  :root {
    ${p => {
      if (p.isDarkMode) {
        return darkTheme;
      }
      return lightTheme;
    }}
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
    font-family: inherit;
    font-size: inherit;

    color: currentColor;
  }

  html {
    font-size: 62.5%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: normal;
  }

  body {
    font-size: 1.4rem;
    font-weight: normal;
    color: var(--color-body-text);
  }

  a {
    text-decoration: none;
  }

`;
