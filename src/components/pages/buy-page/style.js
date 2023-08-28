import styled from 'styled-components';
import { Swiper } from 'swiper/react';

export const BuyPageStyled = styled.main`
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  bottom: 80px;
  padding: 40px 90px 12px;
  margin: 0 auto;
  width: ${(props) => props.theme.width};
  display: flex;
  gap: 20px;
  box-sizing: border-box;
`;

export const LeftColumn = styled.div`
  width: 353px;
  max-height: 100%;
  display: grid;
  gap: 20px;
  overflow-y: overlay;
`;
export const ProductsSelect = styled.section`
  color: #333;
  padding: 24px 20px 20px;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: #fff;
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.04),
    0px 2px 6px 0px rgba(0, 0, 0, 0.04), 0px 10px 20px 0px rgba(0, 0, 0, 0.04);
  margin: 0;
  font-size: 18px;
  box-sizing: border-box;
  max-height: min-content;
`;

export const ProductsStyled = styled(Swiper)`
  width: 727px;
  z-index: 0;

  .swiper-pagination {
    display: none;
  }
  .swiper-slide {
    flex-shrink: 1;
  }
`;

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
