import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LogoStyled = styled(Link)`
  display: flex;
  margin-left: -4px;
  height: 44px;
  align-items: center;
  text-decoration: none;
  color: ${(props) => props.theme.colorText};

  &:hover,
  &:active,
  &:visited {
    text-decoration: none;
    color: ${(props) => props.theme.colorText};
  }
`;
