import Checkbox from '../checkbox/checkbox';
import Title, { TitleLevel, TitleSize } from '../../ui/title/title';
import { ProductsSelect, ProductElement, ProductsList } from './style';

export default function ProductSelect({ products }) {
  return (
    <ProductsSelect>
      <Title level={TitleLevel.H2} size={TitleSize.EXTRA_SMALL}>
        Выберите продукты
      </Title>
      <ProductsList>
        {products.map((product) => (
          <ProductElement key={product.id}>
            <Checkbox title={product.title} />
          </ProductElement>
        ))}
      </ProductsList>
    </ProductsSelect>
  );
}
