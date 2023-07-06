import { TextStyled, PriceStyled } from './style';

export default function Description({ product }) {
  return (
    <>
      <TextStyled>{product.description}</TextStyled>
      <PriceStyled>
        {product.price} руб./{product.weight} гр.
      </PriceStyled>
    </>
  );
}
