import 'styled-components';
import { draculaTheme } from '../styles/themes/default';

type ThemeType = typeof draculaTheme;

declare module 'styled-components' {
  interface DefaultTheme extends ThemeType {}
}
