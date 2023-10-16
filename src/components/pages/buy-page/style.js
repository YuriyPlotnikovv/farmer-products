import styled from 'styled-components';
import { Swiper } from 'swiper/react';

export const BuyPageStyled = styled.main`
  position: absolute;
  top: 80px;
  right: 0;
  bottom: 80px;
  left: 0;

  display: flex;
  gap: 20px;
  box-sizing: border-box;
  width: ${(props) => props.theme.width};
  margin: 0 auto;
  padding: 40px 90px 12px;
`;

export const LeftColumn = styled.div`
  display: grid;
  gap: 20px;
  width: 353px;
  max-height: 100%;
  overflow-y: overlay;
`;
export const ProductsSelect = styled.section`
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  max-height: min-content;
  margin: 0;
  padding: 24px 20px 20px;

  font-size: 18px;
  color: #333;

  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.04),
    0px 2px 6px 0px rgba(0, 0, 0, 0.04), 0px 10px 20px 0px rgba(0, 0, 0, 0.04);
`;

export const ProductsStyled = styled(Swiper)`
  z-index: 0;

  width: 727px;

  .swiper-pagination {
    display: none;
  }
  .swiper-slide {
    flex-shrink: 1;
  }
`;

export const OrderStyled = styled.section`
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  max-height: 315px;
  margin: 0;
  padding: 24px 20px 20px;

  color: #333;

  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.04),
    0px 2px 6px 0px rgba(0, 0, 0, 0.04), 0px 10px 20px 0px rgba(0, 0, 0, 0.04);
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputAdressStyled = styled.input`
  text-align: start;
  align-items: center;
  margin: 24px 0 20px 0;
  padding: 13px;

  font-size: 14px;
  line-height: 21px;

  background: #f6f6f6;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const PriceStyled = styled.dl`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0;
  margin-bottom: 32px;
`;

export const PriceTitle = styled.dt`
  margin: 0;

  font-size: 14px;
  line-height: 150%;
`;

export const PriceDescription = styled.dd`
  margin: 0;

  font-size: 24px;
  line-height: 130%;
  font-weight: 700;
`;
