import styled from 'styled-components';
import { ThemeType } from '../../themes'; // Path will be ../../themes

export const ToggleButton = styled.button<{theme: ThemeType}>`
  padding: 8px 12px;
  border-radius: 20px;
  background-color: ${props => props.theme.accent};
  color: ${props => props.theme.secondaryText}; // Or theme.buttonText
  border: none;
  cursor: pointer;
  font-size: 0.9em;

  &:hover {
    background-color: ${props => props.theme.accentHover};
  }
`;
