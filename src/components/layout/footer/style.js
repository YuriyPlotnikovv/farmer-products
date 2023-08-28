import styled from 'styled-components';

export const FooterStyled = styled.footer`
  display: flex;
  padding-left: ${(props) => props.theme.paddingLeft};
  padding-right: ${(props) => props.theme.paddingRight};
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: ${(props) => props.theme.width};
  margin: 0 auto;
  padding-top: 0;
  padding-bottom: 0;
  height: 79px;
  background-color: ${(props) => props.theme.ColorMain};
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  z-index: 0;
`;

export const FooterCopyrightStyled = styled.span`
  min-width: 148px;
  font-size: ${(props) => props.theme.fontSize};
  vertical-align: middle;
  text-align: right;
`;
