import { render, screen, fireEvent } from "@testing-library/react"; // Added fireEvent
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { logInActionCreator } from "./redux/features/userSlice";
import store from "./redux/store/store"; // Corrected import if store is default export
// Theme related imports
import { CustomThemeProvider, useCustomTheme } from './ThemeContext';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes';
import { GlobalStyle } from './GlobalStyles';
import '@testing-library/jest-dom'; // For .toBeInTheDocument() and other matchers

const mockDispatch = jest.fn();

jest.mock("./redux/hooks", () => ({
  ...jest.requireActual("./redux/hooks"),
  useAppDispatch: () => mockDispatch,
}));

describe("Given the App component", () => {
  describe("When it's invoked", () => {
    test("Then it should render a list element", () => {
      const expectedLenght = 3;

      render(
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      );

      const result = screen.getAllByRole("listitem");

      expect(result).toHaveLength(expectedLenght);
    });
  });

  describe("When it's invoked and a user logs in", () => {
    test("Then it should call dispatch", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      );
      const initialUser = {
        name: "Test",
        username: "test",
        logged: false,
      };

      logInActionCreator(initialUser);

      expect(mockDispatch).toHaveBeenCalled();
      localStorage.removeItem("token");
    });
  });
});

// Re-usable render function for tests needing the full theme and app context
const renderAppWithTheme = () => {
  // This component will expose the theme for checking, and include GlobalStyle
  const TestComponent = () => {
    const { theme } = useCustomTheme();
    const currentTheme = theme === 'light' ? lightTheme : darkTheme;
    return (
      <StyledThemeProvider theme={currentTheme}>
        <GlobalStyle />
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      </StyledThemeProvider>
    );
  };

  return render(
    <CustomThemeProvider>
      <TestComponent />
    </CustomThemeProvider>
  );
};

describe('Theme System', () => {
  it('should toggle body background color when theme changes', () => {
    renderAppWithTheme();
    
    // Initial: Light theme
    // Note: getComputedStyle(document.body).backgroundColor returns rgb values
    expect(getComputedStyle(document.body).backgroundColor).toBe('rgb(245, 245, 245)'); // lightTheme.bodyBackground (#f5f5f5)

    // Find the toggle button (assuming it's in App's header)
    const themeToggleButton = screen.getByRole('button', { name: /switch to dark mode/i });
    fireEvent.click(themeToggleButton);

    // After toggle: Dark theme
    expect(getComputedStyle(document.body).backgroundColor).toBe('rgb(18, 18, 18)'); // darkTheme.bodyBackground (#121212)
  });
});
