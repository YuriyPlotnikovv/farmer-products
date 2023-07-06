import ProductCard from '../product-card/product-card';
import Title, { TitleLevel } from '../../ui/title/title';
import {
  ProductsItemStyled,
  ProductsListStyled,
  ProductsStyled,
} from './style';

export default function ProductsList({ products }) {
  return (
    <>
      <ProductsStyled>
        <ProductsListStyled>
          {products.map((product) => (
            <ProductsItemStyled key={product.id}>
              <ProductCard product={product} title={product.title} />
            </ProductsItemStyled>
          ))}
        </ProductsListStyled>
      </ProductsStyled>
    </>
  );
}
