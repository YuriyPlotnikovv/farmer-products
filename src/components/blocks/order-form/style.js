import styled from 'styled-components';

export const OrderStyled = styled.section`
  color: #333;
  max-height: 315px;
  padding: 24px 20px 20px;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: #fff;
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.04),
    0px 2px 6px 0px rgba(0, 0, 0, 0.04), 0px 10px 20px 0px rgba(0, 0, 0, 0.04);
  margin: 0;
  box-sizing: border-box;
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputAdressStyled = styled.input`
  padding: 13px;
  margin: 24px 0 20px 0;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: #f6f6f6;
  text-align: start;
  font-size: 14px;
  line-height: 21px;
`;

export const PriceStyled = styled.dl`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0;
  margin-bottom: 32px;
`;

export const PriceTitle = styled.dt`
  font-size: 14px;
  line-height: 150%;
  margin: 0;
`;

export const PriceDescription = styled.dd`
  font-size: 24px;
  font-weight: 700;
  line-height: 130%;
  margin: 0;
`;
