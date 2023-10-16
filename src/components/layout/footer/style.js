import styled from 'styled-components';

export const FooterStyled = styled.footer`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: ${(props) => props.theme.width};
  height: 79px;
  margin: 0 auto;
  padding-top: 0;
  padding-right: ${(props) => props.theme.paddingRight};
  padding-bottom: 0;
  padding-left: ${(props) => props.theme.paddingLeft};

  background-color: ${(props) => props.theme.ColorMain};
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

export const FooterCopyrightStyled = styled.span`
  min-width: 148px;
  vertical-align: middle;
  text-align: right;

  font-size: ${(props) => props.theme.fontSize};
`;
