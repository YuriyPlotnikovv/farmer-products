import styled from 'styled-components';

export const HeaderStyled = styled.header`
  position: relative;
  z-index: 5;

  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: ${(props) => props.theme.width};
  height: 80px;
  margin: 0 auto;
  padding-top: 0;
  padding-right: ${(props) => props.theme.paddingRight};
  padding-bottom: 0;
  padding-left: ${(props) => props.theme.paddingLeft};

  background-color: ${(props) => props.theme.ColorMain};
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.04),
    0 0 1px rgba(0, 0, 0, 0.04);
`;
