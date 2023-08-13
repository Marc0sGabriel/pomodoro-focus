import { DefaultTheme, ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { CyclesContextProvider } from './context/CyclesContext';
import { draculaTheme } from './styles/themes/default';
import { useState } from 'react';

export function App() {
  const [customTheme, setCustomTheme] = useState(draculaTheme);

  const handleThemeChange = (theme: DefaultTheme) => {
    setCustomTheme(theme);
  };

  return (
    <ThemeProvider theme={customTheme}>
      <CyclesContextProvider handleThemeChange={handleThemeChange}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </CyclesContextProvider>

      <GlobalStyle />
    </ThemeProvider>
  );
}
