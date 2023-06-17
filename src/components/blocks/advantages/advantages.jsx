import AdvantageCard from '../../ui/advantage-card/advantage-card';
import Button from '../../ui/button/button';
import Title, { TitleLevel } from '../../ui/title/title';
import { AdvantagesStyled } from './style';

export default function Advantages({ advantages }) {
  return (
    <AdvantagesStyled>
      {advantages?.length ? (
        <>
          <Title level={TitleLevel.H2} className='advantages__title'>
            Почему фермерские продукты лучше?
          </Title>
          <ul className='advantages__list'>
            {advantages.map((advantage) => (
              <li className='advantages__item' key={advantage.id}>
                <AdvantageCard advantage={advantage} />
              </li>
            ))}
          </ul>
        </>
      ) : null}
      <Button className='advantages__button button'>Купить</Button>
    </AdvantagesStyled>
  );
}
