// src/ThemeContext.tsx
import React, { useState, createContext, useContext, ReactNode } from 'react'; // Corrected import
// import { ThemeType } from './themes'; // ThemeType is not strictly needed here as theme is a string

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => console.warn('toggleTheme function not yet initialized'),
});

export const useCustomTheme = () => useContext(ThemeContext);

// Define props for CustomThemeProvider to accept children
interface CustomThemeProviderProps {
  children: ReactNode;
}

export const CustomThemeProvider: React.FC<CustomThemeProviderProps> = ({ children }) => { // Corrected props
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
