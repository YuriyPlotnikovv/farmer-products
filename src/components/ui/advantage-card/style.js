import styled from 'styled-components';

export const ArticleStyled = styled.article`
  width: 540px;
  min-height: 197px;
  padding: 20px;
  background-color: #e1edce;
  box-sizing: border-box;

  .card__header {
    display: flex;
    margin-bottom: 20px;
    text-align: left;
  }

  .card__image {
    float: left;
    width: 56px;
    height: 56px;
    margin-right: 20px;
  }

  .card_negative {
    background-color: #f8ddd7;
  }

  .card__marker {
    display: inline-block;
    min-height: 25px;
    margin-bottom: 4px;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 14px;
    line-height: 25px;
    color: #ffffff;
    background-color: #88aa4d;
  }

  .card__marker_negative {
    background-color: #f75531;
  }

  .card__text {
    padding: 0;
    margin: 0;
    text-align: left;
  }
`;
