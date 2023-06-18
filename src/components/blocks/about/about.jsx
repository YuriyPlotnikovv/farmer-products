import Title, { TitleLevel, TitleSize } from '../../ui/title/title';
import farmer from '../../../assets/farmer.svg';
import { AboutImageStyled, AboutStyled, AboutTextStyled } from './style';

export default function About() {
  return (
    <AboutStyled>
      <div>
        <Title level={TitleLevel.H1} size={TitleSize.BIG}>
          Магазин фермерских продуктов с доставкой
        </Title>
        <AboutTextStyled>
          Все продукты изготавливаются под заказ. Фермеры начинают готовить
          продукты за день до отправки заказа клиентам. Именно поэтому мы
          принимаем заказы заранее и доставляем продукты максимально свежими.
        </AboutTextStyled>
      </div>
      <AboutImageStyled src={farmer} alt='фермер' />
    </AboutStyled>
  );
}
