import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['dracula-cyan']};
    border-radius: 3px;
  }

  body {
    background: url('./assets/landscape02.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-color: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-200']};
    padding: 0 1rem;
    -webkit-font-smoothing: antialiassed;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`;
