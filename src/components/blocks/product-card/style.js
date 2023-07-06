import styled from 'styled-components';

export const ArticleStyled = styled.article`
  color: #333;
  padding: 24px 20px 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: #fff;
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.04),
    0px 2px 6px 0px rgba(0, 0, 0, 0.04), 0px 10px 20px 0px rgba(0, 0, 0, 0.04);
  margin: 0;
  display: grid;
  grid-template-columns: 248px auto;
  gap: 20px;
  box-sizing: border-box;
`;

export const ProductImageStyled = styled.img`
  grid-column: 1 / 2;
  width: 248px;
  height: 248px;
  background-size: cover;
`;

export const ProductDescriptionStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;
