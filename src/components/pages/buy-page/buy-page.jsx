import OrderForm from '../../blocks/order-form/order-form';
import ProductsList from '../../blocks/products-list/products-list';
import ProductSelect from '../../blocks/products-select/products-select';
import { BuyPageStyled } from './style';

export default function BuyPage({ products }) {
  return (
    <BuyPageStyled>
      <ProductSelect products={products}></ProductSelect>
      <ProductsList products={products}></ProductsList>
      <OrderForm></OrderForm>
    </BuyPageStyled>
  );
}
