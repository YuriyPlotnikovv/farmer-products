import styled, { css } from 'styled-components';
import checkboxSelect from '../../../assets/tick.svg';

export const Label = styled.label`
  display: block;
  margin: 0;
`;

export const LabelStyled = styled.span`
  position: relative;

  display: flex;
  align-items: center;
  text-align: left;
  height: 56px;

  font-size: 18px;

  cursor: pointer;

  &::after {
    content: '';

    position: absolute;
    right: 0;

    display: block;
    width: 22px;
    height: 22px;

    ${(props) =>
      props.$isChecked
        ? css`
            background-color: #fc9b27;
            background-image: url(${checkboxSelect});
            background-repeat: no-repeat;
            background-position: center center;
            border: 1px solid rgba(0, 0, 0, 0.1);
          `
        : css`
            background-color: ${props.theme.backgroundColorGray};
            border: 1px solid rgba(0, 0, 0, 0.1);
          `}
  }
`;
