import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ButtonStyled = styled(Link)`
  display: block;
  min-height: 60px;
  padding: 0 24px;
  min-width: 260px;
  max-width: 700px;
  font-size: 18px;
  font-weight: bold;
  line-height: 58px;
  text-align: center;
  text-decoration: none;
  color: ${(props) => props.theme.ColorMain};
  background-color: ${(props) => props.theme.ColorButton};
  border: none;
  background-image: none;
  box-shadow: none;
  cursor: pointer;
  transition: background-color 0.2s ease-out, box-shadow 0.2s ease-out;
  box-sizing: border-box;
  font-family: 'Inter', 'Arial', sans-serif;

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.ColorButtonActive};
    box-shadow: inset 0 4px 0 rgba(0, 0, 0, 0.14);
  }

  &:active {
    box-shadow: none;
  }

  &:disabled {
    opacity: 0.7;
    box-shadow: none;
    background-color: ${(props) => props.theme.ColorButton};
    cursor: default;
  }
`;
