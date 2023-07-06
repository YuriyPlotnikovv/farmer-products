import Button from '../../ui/button/button';
import Title, { TitleLevel, TitleSize } from '../../ui/title/title';
import {
  OrderStyled,
  FormStyled,
  InputAdressStyled,
  PriceStyled,
  PriceTitle,
  PriceDescription,
} from './style';

export default function OrderForm() {
  return (
    <OrderStyled>
      <FormStyled>
        <Title level={TitleLevel.H2} size={TitleSize.EXTRA_SMALL}>
          Сделать заказ
        </Title>
        <InputAdressStyled placeholder='Введите адрес доставки' />
        <PriceStyled>
          <PriceTitle>Цена</PriceTitle>
          <PriceDescription>1000 руб.</PriceDescription>
        </PriceStyled>
        <Button>Купить</Button>
      </FormStyled>
    </OrderStyled>
  );
}
