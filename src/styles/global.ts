import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle<{ $wallpaper: string }>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.highlight};
    border-radius: 3px;
  }

  ::selection {
    background-color: ${(props) => props.theme.colors.selection};
  }

  body {
    background: url(./assets/${(props) => props.$wallpaper});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-color: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-200']};
    padding: 0 1rem;
    font-smooth: always;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`;
