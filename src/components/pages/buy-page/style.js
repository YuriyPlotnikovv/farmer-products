import styled from 'styled-components';

export const BuyPageStyled = styled.main`
  padding: 40px 90px 12px;
  margin: 0 auto;
  max-width: ${(props) => props.theme.width};
  justify-content: center;
  display: grid;
  grid-template-columns: 353px 727px;
  grid-template-rows: 355px auto;
  gap: 20px;
`;
