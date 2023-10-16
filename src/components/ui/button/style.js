import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ButtonStyled = styled(Link)`
  display: block;
  box-sizing: border-box;
  min-width: 260px;
  max-width: 700px;
  min-height: 60px;
  padding: 0 24px;
  text-align: center;

  font-family: 'Inter', 'Arial', sans-serif;
  font-size: 18px;
  line-height: 58px;
  font-weight: bold;
  text-decoration: none;
  color: ${(props) => props.theme.ColorMain};

  background-color: ${(props) => props.theme.ColorButton};
  background-image: none;
  border: none;
  box-shadow: none;
  transition: background-color 0.2s ease-out, box-shadow 0.2s ease-out;

  cursor: pointer;

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.ColorButtonActive};
    box-shadow: inset 0 4px 0 rgba(0, 0, 0, 0.14);
  }

  &:active {
    box-shadow: none;
  }

  &:disabled {
    background-color: ${(props) => props.theme.ColorButton};
    box-shadow: none;
    opacity: 0.7;

    cursor: default;
  }
`;
