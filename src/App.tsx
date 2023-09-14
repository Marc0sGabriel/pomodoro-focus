import { DefaultTheme, ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { CyclesContextProvider } from './context/CyclesContext';
import { draculaTheme } from './styles/themes/default';
import { usePersistedState } from './utils/usePersistedState';

export function App() {
  const [customTheme, setCustomTheme] = usePersistedState('@pomodoro-theme', draculaTheme);
  const [wallpaper, setWallpaper] = usePersistedState('@pomodoro-wallpaper', 'landscape02.jpg');

  const handleWallpaper = (name: string) => {
    return setWallpaper(name);
  };

  const handleThemeChange = (theme: DefaultTheme) => {
    setCustomTheme(theme);
  };

  return (
    <ThemeProvider theme={customTheme}>
      <CyclesContextProvider
        handleThemeChange={handleThemeChange}
        handleWallpaper={handleWallpaper}
      >
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyle $wallpaper={wallpaper} />
      </CyclesContextProvider>
    </ThemeProvider>
  );
}
