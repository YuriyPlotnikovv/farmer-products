import Title, { TitleSize } from "../../ui/title/title";
import farmer from "../../../assets/farmer.svg";
import {AboutStyled} from "./style";

export default function About() {
  return (
    <AboutStyled>
      <div className="about__wrapper">
        <Title size={TitleSize.BIG}>
          Магазин фермерских продуктов с доставкой
        </Title>
        <p className="about__text">
          Все продукты изготавливаются под заказ. Фермеры начинают готовить
          продукты за день до отправки заказа клиентам. Именно поэтому мы
          принимаем заказы заранее и доставляем продукты максимально свежими.
        </p>
      </div>
      <img className="about__image" src={farmer} alt="фермер" />
    </AboutStyled>
  );
}
