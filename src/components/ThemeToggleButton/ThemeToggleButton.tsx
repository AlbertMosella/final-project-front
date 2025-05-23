import React from 'react';
import { useCustomTheme } from '../../ThemeContext'; // Adjust path as needed
import {ToggleButton} from './ThemeToggleButtonStyles';

const ThemeToggleButton: React.FC = () => {
  const { theme, toggleTheme } = useCustomTheme();

  return (
    <ToggleButton onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </ToggleButton>
  );
};

export default ThemeToggleButton;
