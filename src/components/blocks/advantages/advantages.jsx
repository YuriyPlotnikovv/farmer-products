import AdvantageCard from '/src/components/blocks/advantage-card/advantage-card';
import Button from '/src/components/ui/button/button';
import Title, { TitleLevel } from '/src/components/ui/title/title';
import {
  AdvantagesStyled,
  AdvantagesListStyled,
  AdvantagesItemStyled,
} from './style';

export default function Advantages({ advantages }) {
  return (
    <AdvantagesStyled>
      {advantages?.length ? (
        <>
          <Title level={TitleLevel.H2} className='advantages__title'>
            Почему фермерские продукты лучше?
          </Title>
          <AdvantagesListStyled>
            {advantages.map((advantage) => (
              <AdvantagesItemStyled key={advantage.id}>
                <AdvantageCard {...advantage} />
              </AdvantagesItemStyled>
            ))}
          </AdvantagesListStyled>
        </>
      ) : null}
      <Button link='catalog' className='advantages__button button'>Купить</Button>
    </AdvantagesStyled>
  );
}
