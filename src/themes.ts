// src/themes.ts
export const lightTheme = {
  bodyBackground: '#f5f5f5',
  componentBackground: 'white',
  headerBackground: 'black',
  footerBackground: 'black',
  buttonBackground: 'white',
  buttonHoverBackground: '#ab001a',
  buttonText: 'black',
  buttonHoverText: 'white',
  primaryText: 'black',
  secondaryText: 'white', // For text on dark backgrounds like header/footer
  accent: 'orange',
  accentHover: '#dedc8a',
  footerAccent: 'linear-gradient(90deg, #ffac12 0%, #000000 94.96%)',
};

export const darkTheme = {
  bodyBackground: '#121212',
  componentBackground: '#1E1E1E',
  headerBackground: '#1E1E1E',
  footerBackground: '#1E1E1E',
  buttonBackground: '#333333',
  buttonHoverBackground: '#555555',
  buttonText: '#E0E0E0',
  buttonHoverText: 'white', // Assuming white text on hover for dark theme buttons
  primaryText: '#E0E0E0',
  secondaryText: '#BBBBBB',
  accent: '#FF8C00', // Dark orange
  accentHover: '#FFA500',
  footerAccent: 'linear-gradient(90deg, #FF8C00 0%, #1E1E1E 94.96%)',
};

// It might also be good to define a type for the theme
export type ThemeType = typeof lightTheme;
