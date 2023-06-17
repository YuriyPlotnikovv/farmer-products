import Title, { TitleSize } from "../title/title";
import { ArticleStyled } from './style';

export default function AdvantageCard({ advantage }) {
  return (
    <ArticleStyled>
      <div className="card__header">
        <img
          className="card__image"
          src={advantage.image}
          alt={advantage.title}
        />
        <div>
          <span
            className={`card__marker${
              advantage.isNegative ? " card__marker_negative" : ""
            }`}
          >
            {advantage.marker}
          </span>
          <Title size={TitleSize.EXTRA_SMALL}>{advantage.title}</Title>
        </div>
      </div>
      <p className="card__text">{advantage.text}</p>
    </ArticleStyled>
  );
}
