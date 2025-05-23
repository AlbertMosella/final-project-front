import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes';
import { CustomThemeProvider, useCustomTheme } from './ThemeContext';
import { GlobalStyle } from './GlobalStyles'; // Added import
import { Provider } from "react-redux";
import store from "./redux/store/store"; // Assuming store is exported from here, based on previous context
import { BrowserRouter } from "react-router-dom";

const AppWithTheme = () => {
  const { theme } = useCustomTheme(); // from ThemeContext
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <StyledThemeProvider theme={currentTheme}>
      <GlobalStyle /> {/* Added GlobalStyle */}
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </StyledThemeProvider>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <CustomThemeProvider> {/* Manages 'light'/'dark' string state */}
      <AppWithTheme /> {/* Consumes string state, provides actual theme object to SC */}
    </CustomThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
