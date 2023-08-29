import Characteristics from '/src/components/blocks/characteristics/characteristics';
import Description from '/src/components/blocks/description/description';
import Properties from '/src/components/blocks/properties/properties';
import Tabs from '/src/components/ui/tabs/tabs';
import Title, { TitleLevel, TitleSize } from '/src/components/ui/title/title';
import {
  ArticleStyled,
  ProductDescriptionStyled,
  ProductImageStyled,
} from './style';

export default function ProductCard({ product, title }) {
  const tabs = [
    {
      id: 0,
      title: 'Описание',
      content: <Description product={product} />,
    },
    {
      id: 1,
      title: 'Характеристики',
      content: <Characteristics characteristics={product.characteristics} />,
    },
    {
      id: 2,
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
