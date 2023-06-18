import styled from 'styled-components';

export const AdvantagesStyled = styled.section`
  position: relative;
  display: flex;
  padding-left: ${(props) => props.theme.paddingLeft};
  padding-right: ${(props) => props.theme.paddingRight};
  box-sizing: border-box;
  padding-top: 100px;
  padding-bottom: 100px;
  flex-direction: column;
  align-items: center;
`;

export const AdvantagesListStyled = styled.ul`
  margin: 0;
  padding: 0;
  margin-top: 44px;
  margin-bottom: 64px;
  margin-left: -20px;
  font-size: 0;
  line-height: 0;
  text-align: center;
`;

export const AdvantagesItemStyled = styled.li`
  display: inline-block;
  margin-left: 20px;
  margin-top: 20px;
  font-size: ${(props) => props.theme.fontSize};
  line-height: ${(props) => props.theme.lineHeight};
  vertical-align: top;
  text-align: left;
  overflow: hidden;
`;
