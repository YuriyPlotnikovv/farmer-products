import styled from 'styled-components';

export const AdvantagesStyled = styled.section`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  padding-right: ${(props) => props.theme.paddingRight};
  padding-bottom: 100px;
  padding-left: ${(props) => props.theme.paddingLeft};
  box-sizing: border-box;
`;

export const AdvantagesListStyled = styled.ul`
  margin-top: 44px;
  margin-right: 0;
  margin-bottom: 64px;
  margin-left: -20px;
  padding: 0;
  text-align: center;

  font-size: 0;
  line-height: 0;
`;

export const AdvantagesItemStyled = styled.li`
  display: inline-block;
  margin-left: 20px;
  margin-top: 20px;
  text-align: left;
  vertical-align: top;
  overflow: hidden;

  font-size: ${(props) => props.theme.fontSize};
  line-height: ${(props) => props.theme.lineHeight};
`;
