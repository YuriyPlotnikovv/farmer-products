import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    height: ${(props) => props.theme.height};
  }

  body,
  html {
    margin: 0;
  }

  body {
    position: relative;
    min-height: ${(props) => props.theme.height};
    font-family: ${(props) => props.theme.fontFamily};
    font-size: ${(props) => props.theme.fontSize};
    line-height: ${(props) => props.theme.lineHeight};
    font-weight: ${(props) => props.theme.fontWeight};
    color: ${(props) => props.theme.colorText};
  }
`;
