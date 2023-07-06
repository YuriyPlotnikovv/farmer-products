import styled from 'styled-components';

export const ArticleStyled = styled.article`
  width: 540px;
  height: 197px;
  padding: 20px;
  box-sizing: border-box;
  background-color: ${(props) =>
    props.isNegative
      ? props.theme.ColorCardNegative
      : props.theme.ColorCardMain};
`;

export const CardHeaderStyled = styled.header`
  display: flex;
  margin-bottom: 20px;
  text-align: left;
`;

export const CardImageStyled = styled.img`
  float: left;
  width: 56px;
  height: 56px;
  margin-right: 20px;
`;
export const CardMarkerStyled = styled.span`
  display: inline-block;
  min-height: 25px;
  margin-bottom: 4px;
  padding: 0 10px;
  font-size: 14px;
  line-height: 21px;
  color: ${(props) => props.theme.ColorMain};
  background-color: ${(props) =>
    props.isNegative
      ? props.theme.ColorMarkerNegative
      : props.theme.ColorMarker};
`;

export const CardTextStyled = styled.p`
  padding: 0;
  margin: 0;
  text-align: left;
`;
