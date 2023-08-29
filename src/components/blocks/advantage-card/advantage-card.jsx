import Title, { TitleLevel, TitleSize } from '/src/components/ui/title/title';
import {
  ArticleStyled,
  CardHeaderStyled,
  CardImageStyled,
  CardMarkerStyled,
  CardTextStyled,
} from './style';

export default function AdvantageCard({
  image,
  isNegative,
  marker,
  title,
  text,
}) {
  return (
    <ArticleStyled isNegative={isNegative}>
      <CardHeaderStyled>
        <CardImageStyled src={image} alt={title} />
        <div>
          <CardMarkerStyled isNegative={isNegative}>{marker}</CardMarkerStyled>
          <Title level={TitleLevel.H4} size={TitleSize.EXTRA_SMALL}>
            {title}
          </Title>
        </div>
      </CardHeaderStyled>
      <CardTextStyled>{text}</CardTextStyled>
    </ArticleStyled>
  );
}
