import Characteristics from '../../blocks/characteristics/characteristics';
import Description from '../description/description';
import Properties from '../properties/properties';
import Tabs from '../../ui/tabs/tabs';
import Title, { TitleLevel, TitleSize } from '../../ui/title/title';
import {
  ArticleStyled,
  ProductDescriptionStyled,
  ProductImageStyled,
} from './style';

export default function ProductCard({ product, title }) {
  const tabs = [
    {
      title: 'Описание',
      content: <Description product={product} />,
    },
    {
      title: 'Характеристики',
      content: <Characteristics characteristics={product.characteristics} />,
    },
    {
      title: 'Свойства',
      content: <Properties properties={product.properties} />,
    },
  ];
  return (
    <ArticleStyled>
      <ProductImageStyled src={product.image} />
      <ProductDescriptionStyled>
        <Title level={TitleLevel.H2} size={TitleSize.SMALL}>
          {title}
        </Title>
        <Tabs tabs={tabs} />
      </ProductDescriptionStyled>
    </ArticleStyled>
  );
}
