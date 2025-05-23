// src/GlobalStyles.tsx
import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './themes'; // Path is correct as GlobalStyles is in src/

export const GlobalStyle = createGlobalStyle<{theme: ThemeType}>`
  body {
    background-color: ${props => props.theme.bodyBackground};
    color: ${props => props.theme.primaryText};
    font-family: "Abel", sans-serif; // Keep existing font
    margin: 0; // Keep existing margin
    overflow-x: hidden; // Keep existing overflow
  }

  /* Add other global styles that need to be themed, e.g., default link colors */
  a {
    color: ${props => props.theme.accent};
    text-decoration: none;
    &:hover {
      color: ${props => props.theme.accentHover};
    }
  }
`;
