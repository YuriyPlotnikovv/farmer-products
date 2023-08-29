import { SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/mousewheel';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useState } from 'react';
import products from '/src/mocks/products';

import Button from '/src/components/ui/button/button';
import Title, { TitleLevel, TitleSize } from '/src/components/ui/title/title';
import ProductCard from '/src/components/blocks/product-card/product-card';
import CheckboxList from '/src/components/blocks/products-list/products-list';

import {
  BuyPageStyled,
  LeftColumn,
  ProductsSelect,
  ProductsStyled,
  OrderStyled,
  FormStyled,
  InputAdressStyled,
  PriceStyled,
  PriceTitle,
  PriceDescription,
} from './style';

export default function BuyPage() {
  const [adress, setAdress] = useState('');
  const onChange = (evt, setChange) => setChange(evt.target.value);

  const [swiperRef, setSwiperRef] = useState(null);
  const [selectProductIds, setSelectProductIds] = useState([]);

  const selectProducts = selectProductIds
  .map((id) => products
  .find((product) => product.id === id));
  const fullPrice = selectProducts.reduce(
    (sum, product) => (sum += product.price),
    0
    );

    const handleOnClickProduct = (value, index) => {
      if (!selectProductIds.includes(value)) {
        swiperRef.slideTo(index, 0);
      }
    };

  const isButtonEnabled = selectProducts.length && adress;

  const handleBuyClick = () => {
    // eslint-disable-next-line no-alert
    alert(`Спасибо за заказ, вы купили:\n${selectProducts.map(
      (product) => `${product.title} - ${product.price} руб.\n`
    )}
    Итого: ${fullPrice} руб.
    Доставка по адресу: ${adress}.`);
  };

  return products && products.length ? (
    <BuyPageStyled>
      <LeftColumn>
        <ProductsSelect>
          <Title level={TitleLevel.H2} size={TitleSize.EXTRA_SMALL}>
            Выберите продукты
          </Title>
          <CheckboxList name={'select-products'}
            options={products.map((product) => ({ value: product.id, title: product.title }))}
            selectValues={selectProductIds}
            onChange={setSelectProductIds}
            onClickLabel={handleOnClickProduct}
          />
        </ProductsSelect>

        <OrderStyled>
          <FormStyled>
            <Title level={TitleLevel.H2} size={TitleSize.EXTRA_SMALL}>
              Сделать заказ
            </Title>
            <InputAdressStyled value={adress} onChange={(e) => onChange(e, setAdress)} placeholder='Введите адрес доставки' />
            <PriceStyled>
              <PriceTitle>Цена</PriceTitle>
              <PriceDescription>{fullPrice} руб.</PriceDescription>
            </PriceStyled>
            <Button disabled={!isButtonEnabled} onClick={handleBuyClick}>Купить</Button>
          </FormStyled>
        </OrderStyled>
      </LeftColumn>
      <ProductsStyled
        onSwiper={setSwiperRef}
        spaceBetween={12}
        direction='vertical'
        slidesPerView='auto'
        scrollbar={{ draggable: true }}
        mousewheel
        modules={[Pagination, Scrollbar, Mousewheel]}
        pagination={{
          type: 'fanction',
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} title={product.title} />
          </SwiperSlide>
        ))}
      </ProductsStyled>

    </BuyPageStyled>
  ) : (
    'Продукты все разобрали.'
  );
}
