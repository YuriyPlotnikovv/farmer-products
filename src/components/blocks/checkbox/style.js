import styled from 'styled-components';

export const LabelStyled = styled.label`
  padding: 0;
  margin-top: 29px;
  display: block;
  position: relative;

  &::after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    top: 0;
    width: 24px;
    height: 24px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background-color: rgba(246, 246, 246, 1);
  }
`;

export const InputProductStyled = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  margin: 0;
  padding: 0;
  border: 0;
  clip: rect(0 0 0 0);
  overflow: hidden;
`;
