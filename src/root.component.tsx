import { StrictMode } from 'react';
import { ThemeSwitcherProvider } from 'react-css-theme-switcher';
import App from './App';
import './i18n/config';
import MainCTXProvider from './utils/MainCTX';

const url = process.env.PUBLIC_URL || window.location.origin;

const themes = {
  dark: `${url}/dark.css`,
  light: `${url}/light.css`,
};

const Root = (_props) => {
  return (
    <StrictMode>
      <ThemeSwitcherProvider themeMap={themes} defaultTheme='light'>
        <MainCTXProvider>
          <App />
        </MainCTXProvider>
      </ThemeSwitcherProvider>
    </StrictMode>
  );
};

export default Root;
