import AdvantageCard from '../advantage-card/advantage-card';
import Button from '../../ui/button/button';
import Title, { TitleLevel } from '../../ui/title/title';
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
      <Button className='advantages__button button'>Купить</Button>
    </AdvantagesStyled>
  );
}
