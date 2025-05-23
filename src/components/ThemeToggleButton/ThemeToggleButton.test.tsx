// src/components/ThemeToggleButton/ThemeToggleButton.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import ThemeToggleButton from './ThemeToggleButton';
import { CustomThemeProvider, ThemeContextType, ThemeContext } from '../../ThemeContext'; // Path: src/ThemeContext.tsx
import { lightTheme, darkTheme } from '../../themes'; // Path: src/themes.ts

// Minimal mock for ThemeContext if needed, or use CustomThemeProvider
const renderWithThemeContext = (ui: React.ReactElement, providerProps?: Partial<ThemeContextType>) => {
  return render(
    <CustomThemeProvider>
      {/* This inner part simulates AppWithTheme's logic more closely */}
      <ThemeContext.Consumer>
        {({ theme }) => (
          <StyledThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            {ui}
          </StyledThemeProvider>
        )}
      </ThemeContext.Consumer>
    </CustomThemeProvider>
  );
};

describe('ThemeToggleButton', () => {
  it('renders and toggles theme correctly', () => {
    renderWithThemeContext(<ThemeToggleButton />);

    // Initial state (light mode)
    let toggleButton = screen.getByRole('button', { name: /switch to dark mode/i });
    expect(toggleButton).toBeInTheDocument();

    // Click to switch to dark mode
    fireEvent.click(toggleButton);

    // Check if text changed (now in dark mode)
    toggleButton = screen.getByRole('button', { name: /switch to light mode/i });
    expect(toggleButton).toBeInTheDocument();

    // Click to switch back to light mode
    fireEvent.click(toggleButton);

    // Check if text changed back (now in light mode)
    toggleButton = screen.getByRole('button', { name: /switch to dark mode/i });
    expect(toggleButton).toBeInTheDocument();
  });
});
